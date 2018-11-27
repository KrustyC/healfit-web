require('dotenv').config()

const path = require('path')
const webpack = require('webpack')

const appRoot = path.dirname(__dirname)
const src = path.join(appRoot, 'src')

module.exports = {
  context: src,
  entry: {
    app: [
      // 'babel-polyfill/dist/polyfill.js',
      // 'raf/polyfill',
      './index.js'
    ]
  },

  output: {
    filename: '[name]-[hash].js',
    publicPath: '/',
    chunkFilename: '[name]-[hash].js'
  },

  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
    alias: {
      app: src,
      helpers: path.join(src, 'helpers'),
      uikit: path.join(src, 'uikit')
    }
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|j|jpeg|jgp|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      },
      {
        test: /\.(ttf|eot|svg|otf|woff|woff2)(\?[\s\S]+)?$/,
        use: 'url-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}
