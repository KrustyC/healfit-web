const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const sharedConfig = require('./webpack.common.js');

const appRoot = path.dirname(__dirname);
const Visualizer = require('webpack-visualizer-plugin');

const buildPath = path.resolve(appRoot, 'dist');

const plugins = [
  new CleanWebpackPlugin(buildPath, { root: appRoot }),
  new webpack.ProgressPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new HtmlWebpackPlugin({
    hash: true,
    title: 'Healfit',
    template: path.resolve(appRoot, 'src/index.html'),
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      APP_URL: JSON.stringify(process.env.APP_URL),
      BUGSNAG_API_KEY: JSON.stringify(process.env.BUGSNAG_API_KEY),
      API_URL: JSON.stringify(process.env.API_URL),
      GA_API_KEY: JSON.stringify(process.env.GA_API_KEY),
      CLOUDINARY_PRESET: JSON.stringify(process.env.CLOUDINARY_PRESET),
      MIX_PANEL_TOKEN: JSON.stringify(process.env.MIX_PANEL_TOKEN),
    },
  }),
  new BrotliGzipPlugin({
    asset: '[path].br[query]',
    algorithm: 'brotli',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
    quality: 11,
  }),
  new BrotliGzipPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
  new Visualizer({ filename: './statistics.html' }),
  new MiniCssExtractPlugin(),
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  }),
  new workboxPlugin.GenerateSW({
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
  }),
];

module.exports = merge(sharedConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: buildPath,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
      }),
    ],
  },
  plugins,
});
