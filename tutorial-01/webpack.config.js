const path = require('path')

module.exports = {
  mode: 'development',

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
              sourceMap: true,
              importLoaders: 2 // sass は 2
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: 'dist',
    open: false,
  },
}
