const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const packageName = require('./package.json').name;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: false,
    static: {
      directory: path.join(__dirname, './dist'),
      publicPath: '/',
    },
    port: 3002,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    library: `${packageName}`,
    libraryTarget: 'umd',
    // webpack5 jsonpFunction 改成了 chunkLoadingGlobal
    chunkLoadingGlobal: `webpackJsonp_${packageName}`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'react_app',
      filename: "react_app.js",
      remotes: {
        common: 'common@http://localhost:3000/base-common.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title: 'react-app'
    }),
  ],
};
