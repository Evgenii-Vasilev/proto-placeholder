const path = require('path')

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
            }
        ]
    }
}