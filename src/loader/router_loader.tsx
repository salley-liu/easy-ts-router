import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { RouterData } from "../data";

/**
 * 路由加载器
 */
export class RouterLoader {

    private static currentRouters: (JSX.Element | undefined)[] = [];

    public static renderRouter(routers: RouterData[]): (JSX.Element | undefined)[] {
        this.renderRoute(routers);
        return this.currentRouters;
    }

    public static renderMenus(routers: RouterData[]): (JSX.Element | undefined)[] {
        // @ts-ignore
        const menu = routers.map((router) => {
            if (!router.hideInMenu && router.children) {
                return (<SubMenu key={router.key} icon={router.icon} title={router.name}>
                    {
                        router.children && router.children.map((item) => {
                            if (!item.hideInMenu) {
                                return (<Menu.Item key={item.key}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Menu.Item>);
                            }
                            return null;
                        })
                    }
                </SubMenu>);
            }else if(!router.hideInMenu && !router.children){
                if (!router.hideInMenu) {
                    return (<Menu.Item key={router.key} icon={router.icon}>
                        <Link to={router.path}>{router.name}</Link>
                    </Menu.Item>);
                }
            }
        });
        return menu;
    }

    private static renderRoute(routers?: RouterData[]) {
        if (routers) {
            for (let i = 0; i < routers.length; i++) {
                if (routers[i].path) {
                    this.currentRouters.push(<Route
                        key = {routers[i].key}  
                        exact = {routers[i].exact} 
                        path = {routers[i].path} 
                        component = {routers[i].component} />)
                }
                if (routers[i].children){
                  this.renderRoute(routers[i].children);
                }
            }
        }
    }
}