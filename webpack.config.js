const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './client/src/index.js'),
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/pages/main.html'
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'client'),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
}