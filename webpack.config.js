const path = require('path');

module.exports = {
  entry: './app/src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'app/dist')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "stylus-loader"
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'app/dist'),
    historyApiFallback: true,
    compress: true,
    port: 8081
  }
};