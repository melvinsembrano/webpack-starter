const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: '[name].js',
  },
};
