var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './client/main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
      {test: /\.js$/,  exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},

      // Give bootstrap-webpack js access to the jQuery object.
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},

      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
