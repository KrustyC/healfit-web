const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const sharedConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    publicPath: '/',
    port: process.env.DEV_PORT,
    hotOnly: true,
  },
  output: {
    path: path.resolve(appRoot, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: 'assets/images',
    //     to: path.resolve(appRoot, 'dist/images'),
    //   },
    // ]),
    new HtmlWebpackPlugin({
      hash: true,
      title: '[DEV] Healfit',
      template: path.resolve(appRoot, 'src/index.html'),
      chunks: ['vendor', 'app'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify('development'),
        APP_URL: JSON.stringify(process.env.APP_URL),
        BASE_URL: JSON.stringify('/'),
        BUGSNAG_API_KEY: JSON.stringify(process.env.BUGSNAG_API_KEY),
        API_URL: JSON.stringify(process.env.API_URL),
        GA_API_KEY: JSON.stringify(process.env.GA_API_KEY),
        CLOUDINARY_PRESET: JSON.stringify(process.env.CLOUDINARY_PRESET),
      },
    }),
  ],
};

module.exports = merge(sharedConfig, devConfig);
