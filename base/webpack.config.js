const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js'
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
  plugins: [
    new ModuleFederationPlugin({
      name: 'common',
      //library: { type: 'window', name: 'common'},
      filename: 'base-common.js',
      exposes: {
        './react': 'react',
        './react-dom': 'react-dom',
        './react-router-dom': 'react-router-dom',
        './utils': './src/utils',
        './Heading': './src/components/Heading',
        './ButtonNum': './src/components/Button'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
