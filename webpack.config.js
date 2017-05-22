var webpack = require('webpack');

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
}