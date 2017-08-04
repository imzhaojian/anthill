/**
 * Created by zhaojian on 2017/8/4.
 */
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: '#source-map',
    entry: {
        'book-list': './public/react/components/Content.jsx'
    },
    output: {
        filename: './public/react/components/[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    }
};