const path = require('path');

module.exports = {
  mode: 'production',
  entry: './main.js',
  context: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'img-to-base64.js'
  },
}