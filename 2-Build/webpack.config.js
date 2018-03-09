const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, 'wwwroot', 'dist');

module.exports = {
    mode: 'development',
    entry: {
        'sw-view': './Client/pages/sw-view/index.js'
    },
    output: {
        path: distPath,
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({
            template: './Client/pages/sw-view/sw-view.html',
            filename: '../pages/sw-view.html',
            title: 'SWAPI view'
        }),
        new ExtractTextPlugin('[name].[hash].css')
    ]
};
