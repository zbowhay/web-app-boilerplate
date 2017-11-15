const path = require('path');
const isProd = (process.env.NODE_ENV === 'production');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// This will be the prod webpack config, but for now it is just a copy of dev
/*
* will need to add uglifyJs for optimization
* remove devServer too
*/


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
    extensions: [ '.ts', '.tsx', '.js', '.css' ]
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/,
        loaders: [ 'angular2-template-loader', 'ts-loader', ], // something odd here https://github.com/TheLarkInn/angular2-template-loader/issues/19
        exclude: [ /\.(spec|e2e)\.ts$/ ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'file-loader'
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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    compress: false,
    historyApiFallback: true,
    https: false,
    clientLogLevel: 'error'
  }
}