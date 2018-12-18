const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const sharedConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appRoot = path.dirname(__dirname);

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(appRoot, 'dist'),
    host: process.env.DEV_STATIC_URL,
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    port: process.env.DEV_PORT,
    hotOnly: true,
  },
  output: {
    path: path.resolve(appRoot, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'assets/images',
        to: path.resolve(appRoot, 'dist/images'),
      },
    ]),
    new HtmlWebpackPlugin({
      hash: true,
      title: '[DEV] Fitelity',
      template: path.resolve(appRoot, 'src/index.html'),
      chunks: ['vendor', 'app'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify('development'),
        BUGSNAG_API_KEY: JSON.stringify(process.env.BUGSNAG_API_KEY),
        DEV_API_URL: JSON.stringify(process.env.DEV_API_URL),
      },
    }),
  ],
};

module.exports = merge(sharedConfig, devConfig);
