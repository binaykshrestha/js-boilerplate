import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {
devtool: 'source-map',
entry: [
path.resolve(__dirname, './client/src/app/index.js')
],
target: 'web',
output: {
path: path.resolve(__dirname, './client/dist'),
publicPath: '/',
filename: 'bundle.js'
},
plugins: [
new HtmlWebpackPlugin({
template: './client/src/app/index.html',
inject: true
})
],
module: {
rules : [
{
test: /\.js$/,
exclude: /node_modules/,
use: ['babel-loader'],
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader'],
}
]
}
}



import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// Under plugins, add:
new MiniCssExtractPlugin(),
// Under module rules, add: 
{
test: /\.[s]css$/,
use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader', 'sass-loader'],
}