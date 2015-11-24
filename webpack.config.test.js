var config = require('./webpack.config');
var _ = require('lodash');

module.exports = _.extend(config, {
  target: 'node',
  entry: [
    './client/test/app.jsx',
  ],
  output: {
    path: '/tmp/',
    filename: 'bootstrapTestBundle.js',
  },
  module: {
    loaders: [
      // Can't use the style loader during headless testing.
      {test: /(\.css|\.less)$/, loader: 'null-loader'},

      // ## Below is the same as the default config. We repeat it here
      // ## because we are overriding the whole `module` section of the config.

      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},

      // Give bootstrap-webpack js access to the jQuery object.
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},

      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
});
