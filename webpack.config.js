var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map', //设置调试代码的方式
    entry: [
        'webpack/hot/only-dev-server',
        './main.js'
    ],
    output: {
        path:'./build',
        filename:'bundle.js'
    },
    module: {
        preLoader: [
            {test: /\.js$/,loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.(png|jpg)/, loader:'url-loder?limit=8192'}
        ]
    },
    resolve: {
        alias: {
            'react-dom': path.join(__dirname, 'node_modules/react-dom/dist/react-dom.min')
        },
        extensions: ['', '.js', '.jsx', '.json', '.css']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name]-[hash:5].min.css')
    ],
    externals: {
        jQuery: true
    }
};