const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../dev'),
    publicPath: '/',
  },

  // output: {
  //   pathinfo: true,
  //   path: path.resolve(__dirname, '../dev'),
  //   filename: 'js/[name].js',
  //   chunkFilename: 'js/[name]-chunk.js',
  // },

  // optimization: {
  //   // splitChunks: {
  //   //   chunks: 'all',
  //   //   name: false,
  //   // },
  //   // runtimeChunk: true,
  // },

});
