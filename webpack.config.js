const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const { join } = require("path");
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require("glob");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader',{
          loader: 'css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'
        }],
      }
    ]
  },

  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
    new PurifyCSSPlugin({
      paths: glob.sync(join(__dirname, './dist/*.html')),
    })
  ],
}