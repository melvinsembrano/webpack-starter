const path = require('path');

module.exports = {
  entry: {
    index: ['./src/index.js'],
  },

  output: {
    pathinfo: true,
    path: path.resolve(__dirname, '../dev'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-chunk.js',
  },

  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    //   name: false,
    // },
    // runtimeChunk: true,
  },

};
