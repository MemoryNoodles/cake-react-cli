/*热加载代理请求配置 修改后需重启热加载*/
const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    const options = {
         target: 'http://192.168.7.146:12345', // 目标服务器 host
       // target: 'http://localhost:5555', // 目标服务器 host试试
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
    };
    app.use(
        proxy("/api", options)
    );
    app.use(
        proxy("/webSocketServer", {
            target: "ws://192.168.7.146:12345",
            // target: "ws://localhost:5555",
            changeOrigin: true,
            ws:true
        })
    );
};