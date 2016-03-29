var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'json']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: '/node_modules/',
                loaders: ['react-hot', 'babel'],
                include : path.join(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        HTMLWebpackPluginConfig
    ]
};
