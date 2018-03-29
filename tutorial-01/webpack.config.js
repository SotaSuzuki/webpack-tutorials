const path = require('path')

const MODE = 'development'
const enabledSourceMap = (MODE === 'development')

module.exports = {
  mode: MODE,

  entry: {
    index: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
              sourceMap: enabledSourceMap,
              importLoaders: 2 // sass は 2
              // 0 => no loaders (default)
              // 1 => postcss-loader
              // 2 => postdcss-loader, sass-loader
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: 'dist',
    open: true,
  },
}
