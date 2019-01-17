const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const sharedConfig = require('./webpack.common.js');

const appRoot = path.dirname(__dirname);
const Visualizer = require('webpack-visualizer-plugin');

const buildPath = path.resolve(appRoot, 'dist');

const plugins = [
  new CleanWebpackPlugin(buildPath, { root: appRoot }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  // new CopyWebpackPlugin([
  //   {
  //     from: 'assets/images',
  //     to: path.resolve(appRoot, 'dist/images'),
  //   },
  // ]),
  new HtmlWebpackPlugin({
    hash: true,
    title: 'Healfit',
    template: path.resolve(appRoot, 'src/index.html'),
  }),
  new webpack.DefinePlugin({
    'process.env': {
      APP_ENV: JSON.stringify('production'),
      BUGSNAG_API_KEY: JSON.stringify(process.env.BUGSNAG_API_KEY),
      API_URL: JSON.stringify(process.env.API_URL),
      GA_API_KEY: JSON.stringify(process.env.GA_API_KEY),
    },
  }),
  new TerserPlugin({
    parallel: true,
    terserOptions: {
      ecma: 6,
    },
  }),
  new Visualizer({ filename: './statistics.html' }),
];

module.exports = merge(sharedConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: buildPath,
  },
  plugins,
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
});
