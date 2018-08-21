const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].bundle.js'
    },
    mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.js$/,      // regx
                exclude: /node_modules/,
                use: [
                    {   loader: 'babel-loader'  },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {   loader: 'style-loader'  },
                    {   
                        loader: 'css-loader',
                        options: {
                            modules: true,                    
                        },
                    }
                ]
            },{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'public/index.html'
        })  
    ],
    devServer:{
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')]
    }
}