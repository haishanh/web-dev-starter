'use strict';

const path = require('path');
const { devtool, rules, plugins } = require('../..');

const entry = {
  vendor: ['babel-polyfill'],
  app: ['./src/index.js']
};

const output = {
  path: path.resolve(__dirname, 'public', 'assets'),
  filename: '[name].bundle.js',
  publicPath: '/assets'
};


module.exports = {
  devtool,
  entry,
  output,
  module: {
    rules
  },
  plugins
};
