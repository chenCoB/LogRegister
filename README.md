# kooit

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

注：页面开启地址切换到:localhost:8080/login 登录页



利用vue+express+mongodb登录注册

为了解决express连接mongodb跨域问题 
config目录下的index.js的dev对象需要改变

server目录 server.js创建服务器以及mongodb数据库 登录注册验证

router目录 index.js 路由配置页

component目录 各个组件

目前有那个页面登录页 注册页 推荐页
http://localhost:8080/login 
http://localhost:8080/registered 
http://localhost:8080/index/recommended

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
