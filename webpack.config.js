const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve('./src/index.js'),
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          { loader: path.resolve('./src/marked-loader.js') }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' })
  ]
}
