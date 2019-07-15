const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../', 'static')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
