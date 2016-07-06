'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    Example: [
      'babel-polyfill',
      './src/renderApp.js'
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    chunkFilename: '[id].min.js',
    publicPath: '/dist/',
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.DefinePlugin({
      'process.env.MIN_EXT': JSON.stringify('.min')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
};
