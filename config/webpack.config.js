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
    strictExportPresence: true,

    rules: [
      {
        parser: {
          requireEnsure: false,
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            loader: "eslint-loader",
            options: {},
          },
        ],
      },
      {
        oneOf: [

          // "url" loader works like "file" loader except that it embeds assets
          // smaller than specified limit in bytes as data URLs to avoid requests.
          // A missing `test` is equivalent to a match.
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'media/[name].[hash:8].[ext]',
            },
          },

          {
            test: /\.(js|mjs|jsx)$/,
            // include: paths.appSrc,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              // customize: require('babel-preset-react-app/webpack-overrides'),
              
              plugins: [
                [
                  require('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
              ],
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              // Don't waste time on Gzipping the cache
              cacheCompression: false,
            },
          },

          // css loader
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
      },

    ],
  }

};
