const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '../example'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index_[hash:10].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8080,
    open: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })]
}