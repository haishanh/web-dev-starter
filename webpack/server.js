'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const getWebpackDevEntry = ({ port }) => {
  return [
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://0.0.0.0:' + port,
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server'
  ];
};

const reactHotLoaderEntry = 'react-hot-loader/patch';

const run = ({ config, contentBase, port = 8000, type = 'normal' }) => {
  const webpackDevEntry = getWebpackDevEntry({ port });
  const extraEntries =
    type === 'react'
      ? [reactHotLoaderEntry, ...webpackDevEntry]
      : [...webpackDevEntry];
  config.entry.app = [...extraEntries, ...config.entry.app];

  config.plugins.push(
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin()
  );

  const compiler = webpack(config);

  const server = new WebpackDevServer(compiler, {
    // enable HMR on the server
    hot: true,
    // contentBase: path.join(__dirname, '..', 'public'),
    contentBase,
    stats: {
      colors: true,
      cached: false,
      cachedAssets: false,
      chunks: false,
      chunkModules: false
    },
    overlay: {
      warnings: true,
      errors: true
    },
    publicPath: config.output.publicPath,
    historyApiFallback: true
  });

  server.listen(port, '0.0.0.0', () => {
    console.log('\n>> Listening at http://0.0.0.0:' + port + '\n');
  });
};

module.exports.run = run;
