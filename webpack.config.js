var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
var webpack = require('webpack');

const config = {
  entry: {
    'universal-drawer':'./lib/index.js',
  },
  output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: '[name].min.js',
      // export itself to a global var
      libraryTarget: "var",
      // name of the global var: "Foo"
      library: "UniversalDrawer"
  },
  externals: {
      // require("jquery") is external and available
      //  on the global var jQuery
      "jquery": "jQuery"
  },
  module: {
        loaders: [
            //for es6 and react support
            { 
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015']
              }
            },
            
            //loader for sass support
            {
              test: /\.scss$/,
              loaders: ExtractTextPlugin.extract({fallback:"style-loader",use:['css-loader','postcss-loader','sass-loader']})
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        //webpack plugin that creates a new css file in specified directory
        new ExtractTextPlugin("../css/[name].min.css"),
        new webpack.ProvidePlugin({
            "Tether": 'tether',
            Popper: ['popper.js', 'default']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
              comments: false
            } 
        }),

    ]
};

module.exports = config;