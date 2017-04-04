const webpack = require('webpack')
    , path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: [
        'bootstrap/less/bootstrap.less', 
        './assets/style.less', 
        './assets/favicon.ico',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.json$/,
            loader: 'json-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },{
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },{
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },{
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
        },{
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },{
            test: /\.(jpg|jpeg|gif|png|ico)$/,
            loader:'file-loader?name=[name].[ext]',
            exclude: /node_modules/
        }]
    },
    target: 'web',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    }
};