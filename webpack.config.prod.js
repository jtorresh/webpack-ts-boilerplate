const merge = require ('webpack-merge');
const common = require('./webpack.config.common');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

const optimiceJS = new UglifyJsWebpackPlugin({
  test: /\.js$/,
  extractComments: true
})

const optimiceCss = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/,
  cssProcessorOptions: { dissableComments: { removeAll: true }}
})
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
      minChunks: Infinity
    }
  },
  plugins: [
    optimiceCss,
    optimiceJS
  ]
});