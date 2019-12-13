var path  = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  resolve: {
    extensions: ['', '.js', '.css']
  },
  output: {
    path: root('../project-phoenix/www/core/rhmi'),
    filename: 'rhmi-sync.js'
  },
  target: 'web',
  entry: './www/core/rhmi/rhmi-sync-es6.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['es2015'] }
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/
      }
    ]
  }
};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}