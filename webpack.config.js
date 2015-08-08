var path = require('path');
var moment = require("moment");
var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  debug: true,

  entry: "./app/main.jsx",

  output: {
    path: path.join(__dirname, 'public', 'assets/js'),
    filename: "main.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app"),
          path.resolve(__dirname, "test")
        ],
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        SUPPORT_EMAIL: JSON.stringify(process.env.SUPPORT_EMAIL),
        APP_VERSION: JSON.stringify('DEV'),
        APP_DEPLOYMENT_DATE: JSON.stringify(moment().format('MMMM D, YYYY hh:mm:ss A'))
      }
    })
  ]
};
