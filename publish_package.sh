echo '删除旧的打包文件'
rm -rf ./dist
sleep 2
echo '执行打包！'
npm run build
sleep 2
echo '切换正常源！'
npm config set registry http://registry.npmjs.org
sleep 2
echo '复制发布文件！'
cp package.json ./dist/package.json
sleep 2
cp README.md ./dist/README.md
sleep 2
npm publish ./dist
sleep 2
echo '切换淘宝源！'
npm config set registry https://registry.npm.taobao.org