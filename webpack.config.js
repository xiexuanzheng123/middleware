var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
    devtool: 'cheap-module-eval-source-map', //设置调试代码的方式
    entry: {
        hmr: [
            // 'eventsource-polyfill', // necessary for hot reloading with IE
            'webpack-hot-middleware/client?reload=true'    // note that it reload the page it hot module reload    
        ],
        main: [
            './src/js/main.js'
        ],
        test: [
            './src/js/test.js'
        ]
    },
    output: {
        path: path.join(__dirname,'/build'),
        filename:'[name]bundle.js',
        publicPath: '/'
    },
    module: {
        // preLoader: [
        //     {test: /\.js$/,loader: "eslint-loader", exclude: /node_modules/}
        // ],
        loaders: [
            {
                test: /\.css$/, 
                loader: 'css-loader'
            },
            {test: /\.(png|jpg)/, loader:'url-loder?limit=8192'},
            {test: /\.js$/, loader: 'babel-loader',include: path.join(__dirname,'src')}
        ]
    },
    resolve: {
        alias: {
            'react-dom': path.join(__dirname, 'node_modules/react-dom/dist/react-dom.min')
        },
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            // compress: {
            //     warning: false
            // }
        }),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title:'myapp',
            filename:'build/admin.html',
            template:'index.html',
            inject: 'body',
            favicon: './src/images/green.jpg',
            hash: true,
            chunks: ['hmr', 'test']
        }),
        //new ExtractTextPlugin('src/css/[name].css')
    ],
    externals: {
        jQuery: true
    }
};