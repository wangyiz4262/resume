const webpack = require('webpack')
    , path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: ['./node_modules/bootstrap/less/bootstrap.less', './index.js'],
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
            test: /\.(eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
        },{
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'babel-loader!svg-react-loader'
        }]
    },
    target: 'web',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    }
};