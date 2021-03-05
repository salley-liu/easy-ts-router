
/**
 * 路由对象
 */
export interface RouterData {
    /**
     * 路由名称
     */
    name: string;
    /**
     * 路由key
     */
    key: string;
    /**
     * 请求路径
     */
    path?: string | any;
    /**
     * 是否展示在侧栏
     */
    hideInMenu: boolean;
    /**
     * 待渲染的组件
     */
    component?: any;
    /**
     * 是否严格匹配
     */
    exact?: boolean;
    /**
     * 路由图标
     */
    icon?: JSX.Element | string;
    /**
     * 是否隐藏孩子节点
     */
    hideChild?: boolean;
    /**
     * 权限
     */
    auth?: string[];
    /**
     * 子路由
     */
    children?: RouterData[];
    /**
     * 是否存在孩子节点
     */
    isHasChildren?: boolean;
}