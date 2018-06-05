const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')




module.exports = {
    mode : "development",
    module : {
        rules :  [
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                {
                    loader: 'url-loader',
                    options: {  
                                     
                    },   
                }
                ]
            },
             {
                　　　　　　test: /\.html$/,
                　　　　　　loader: 'html-withimg-loader'
                　　　　}
                ]
    },
    plugins : [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/'),
        host: 'localhost',
        compress: true,//服务器压缩
        port: 1717,
        inline : true //实时刷新
    }
}