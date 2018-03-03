const path = require('path')

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { modules: false }],
                'react'
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    open: true
  }
}
