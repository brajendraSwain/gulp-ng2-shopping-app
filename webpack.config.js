var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var debug = true;

module.exports = {
  entry: "./src/app/main",

  devtool: debug ? "inline-sourcemap" : null,
  debug: true,

  output: {
    path: __dirname + "/dist", 
    publicPath: 'dist/', 
    filename: "bundle.js",
    pathinfo: true
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    }]
  },
  plugins: debug ? [
    new ExtractTextPlugin("style.css")
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin("style.css")
  ]
};