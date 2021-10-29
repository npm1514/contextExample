const path = require('path');
const webpack = require('webpack');
require('@babel/polyfill');

const pages = ['list', 'onePromo']

module.exports = pages.map(page => {
  return {
      mode: 'development',
      entry: ['@babel/polyfill', './src/bundles/'+page+'Bundle.js'],
      module: {
          rules: [
              {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                      loader: 'babel-loader'
                  }
              }
          ]
      },
      output: {
          filename: 'js/'+page+'Bundle.min.js',
          path: path.join(__dirname, 'dist')
      },
      node: {
         fs: "empty",
         net: "empty"
      }
  }
})
