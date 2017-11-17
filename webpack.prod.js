const path = require('path');
const isProd = (process.env.NODE_ENV === 'production');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./config/helpers.js');

// will need to remove devServer

module.exports = {
  devtool: isProd ? 'source-map' : 'inline-source-map',
  entry: {
    main: './src/main.ts',
    pollyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: [ '.ts', '.js', '.css' ]
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/,
        loaders: [ 'ts-loader', 'angular2-template-loader'],
        exclude: [ /\.(spec|e2e)\.ts$/ ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loaders: [ 'css-to-string-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /.ico$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3001'
    },
    compress: false,
    historyApiFallback: true,
    https: false,
    clientLogLevel: 'error'
  }
}