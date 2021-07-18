const proxy = require('http-proxy-middleware')
//"proxy":"http://192.168.0.7:5000" => Json file 只配置一個 proxy

module.exports = function (app){
    app.use(
        proxy('/api1',{
            target:'http://192.168.0.7:5000',//遇見 api1 就往這裡發送請求
            changeOrigin:true,//Host 字段 標示本次請求是哪裏發出
            pathRewrite:{'^/api1':''}//重寫請求路徑 取代 api1 => ''
        }),
        proxy('/api2',{
            target:'http://192.168.0.7:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )

}