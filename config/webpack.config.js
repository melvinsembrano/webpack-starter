const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../dev',
            }
          },
          'css-loader',
        ],
      },

      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../dev',
            }
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  }

};
