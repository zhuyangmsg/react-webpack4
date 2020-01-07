const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/env","@babel/react"]  //babel-loader高版本对应新的预设 @babel/preset-env和@babel/preset-react
                    }
                }]
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']  // 增加 'less-loader' ，注意顺序
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']  // 增加 'postcss-loader' , 单独抽离css ， 注意顺序
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                  loader: 'url-loader',
                  options: {
                    outputPath: 'images/', // 图片输出的路径
                    limit: 10 * 1024
                  }
                }
            },
            //处理 html 代码中 <img src="..."/> 的形式
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    //webpack-dev-server配置本地服务器，并配置跨域
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        port: 8000, // 本地服务器端口号
        hot: true, // 热重载
        inline:true
    },
    plugins:[
        //创建入口文件html
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html"
        })
    ]
}