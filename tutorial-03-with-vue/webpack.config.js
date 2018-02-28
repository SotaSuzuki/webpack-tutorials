const path = require('path')

module.exports = {
  mode: 'development', // CLI option で上書きされる

  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  devServer: {
    contentBase: 'dist',
    open: false, // is default
  }
}
