const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const extractText = new extractTextPlugin('css/[name].[hash].css');
const htmlInject = new htmlWebpackPlugin({
  template: 'index.html'
});


module.exports  = {
  entry: {
    app: path.resolve(__dirname, './src/index.tsx'),
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        }),
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelOptions: {
            babelrc: true
          },
        },
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            fallback: 'file-loader',
            name: 'videos/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            fallback: 'file-loader',
            name: 'videos/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: 'file-loader',
            name: 'videos/[name].[hash].[ext]'
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    extractText,
    htmlInject
  ]
};