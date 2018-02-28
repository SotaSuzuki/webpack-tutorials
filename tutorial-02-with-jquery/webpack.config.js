const path = require('path')

module.exports = {
  mode: 'production',

  // entry: path.resolve(__dirname, 'src', 'index.js'),
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist')
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
                ['env', { modules: false }]
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: 'dist'
  }
}
