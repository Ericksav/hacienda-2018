var webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
      rules:
      [
        { // Javascripts
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
      	{ // Scss
          test: /\.(sass|scss)$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          },
          {
              loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-cssnext')(),
              ]
            }
          },
          {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loader:"file-loader",
          query:{
            name:'[name].[ext]',
            outputPath:'img/'
            //the images will be emmited to public/assets/images/ folder 
            //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png); 
          }
        }
      ]
    },
  plugins: [
    new BrowserSyncPlugin({
    // browse to http://localhost:8000/ during development, 
    // ./public directory is being served 
      host: 'localhost',
      port: 8000,
      server: './',
      files: [
          "./src/*.js",
          "./*.html",
          "./templates/*.html",
          "./src/templates/*.html",
          "./src/scss/**/*.scss"
        ]
    }),
    // Copy the images folder and optimize all the images
    new CopyWebpackPlugin([
      {
        from: 'src/img/',
        to: './img'
      }
    ]),
    // new ImageminPlugin({
    //   disable: process.env.NODE_ENV !== 'production', // Disable during development
    //   pngquant: {
    //     quality: '60-70'
    //   }
    // })
    new ImageminPlugin(
    	{
    		disable: process.env.NODE_ENV !== 'production',
        test: /\.(jpe?g|png|gif|svg)$/i
    	}
    )
  ]
};


