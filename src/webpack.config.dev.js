(function () {

  var path = require('path');
  var webpack = require('webpack');

  //Plugin lists:
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var PurifyCSSPlugin = require('purifycss-webpack-plugin');

  module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './main'
    ],
    output: {
      path: path.join(__dirname, '..','dist'),
      filename: 'scripts/main.js',
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.vue$/, loader: 'vue'
        },
        {
          test: /\.js$/, loader: 'babel', exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
        },
        {test: /\.(gif|jpg|png|svg)\??.*$/, loader: 'url-loader?limit=8096&name=images/[name].[ext]'},
        {test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8096&name=fonts/[name].[ext]'},
        {test: /\.(html|tpl)$/, loader: 'html-loader'},
        {test: /\.(json)$/, loader: 'json-loader'}
      ]
    },
    vue: {
      loaders: {
        css: ExtractTextPlugin.extract('vue-style-loader', 'css'),
        less: ExtractTextPlugin.extract('vue-style-loader', 'css!less'),
        sass: ExtractTextPlugin.extract('vue-style-loader', 'css!sass')
      }
    },
    babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
    },
    devServer: {
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({
        Vue: 'vue'
      }),
      new ExtractTextPlugin('styles/main.css'),
      new HtmlWebpackPlugin({
        template:path.join(__dirname, 'index.html')
      })
    ],
    resolve: {
      extensions: ['', '.js', '.vue'],
      alias: {
        assets: path.join(__dirname, './assets'),
        views: path.join(__dirname, './views'),
        widgets: path.join(__dirname, './widgets'),
        components: path.join(__dirname, './components'),
        styles: path.join(__dirname, './styles')
      }
    },
    devtool: '#source-map'
  };


}());
