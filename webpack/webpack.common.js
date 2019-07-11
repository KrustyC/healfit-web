require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const appRoot = path.dirname(__dirname);
const src = path.join(appRoot, 'src');

module.exports = {
  context: src,
  entry: {
    app: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: '[name]-[hash].js',
    publicPath: '/',
    chunkFilename: '[name]-[hash].js',
  },

  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
    alias: {
      app: src,
      helpers: path.join(src, 'helpers'),
      hoc: path.join(src, 'hoc'),
      hooks: path.join(src, 'hooks'),
      assets: path.join(src, 'assets'),
      '@duik': path.join(src, 'duik'),
      uikit: path.join(src, 'uikit'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|j|jpeg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|otf|woff|woff2)(\?[\s\S]+)?$/,
        use: 'url-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../src/assets'), to: 'assets' },
    ]),
    new workboxPlugin.InjectManifest({
      swSrc: path.join(__dirname, '../src/src-sw.js'),
      swDest: 'sw.js',
    }),
  ],
  optimization: {
    concatenateModules: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          minChunks: 2,
        },
      },
    },
  },
};
