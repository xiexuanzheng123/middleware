var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var complier = webpack(config);

var server = new WebpackDevServer(complier, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
});
server.listen(3000, 'localhost', function(err, result) {
    if(err) {
        return console.log(err);
    }
    console.log('Listening at http://locathost:3000/');
});