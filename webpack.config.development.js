'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    Example: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/renderApp.js'
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/dist/',
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.DefinePlugin({
      'process.env.MIN_EXT': JSON.stringify('')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?'+JSON.stringify({
          plugins: [
            ['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals:  ['module']
              }]
            }]
          ]
        })],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
};
