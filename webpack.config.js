const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    filename: path.resolve(__dirname, 'src/scripts/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
    filename: '[name][contenthash].js',
    clean: true
  },

  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  },

  devServer: {
    port: 3000,
    compress: true,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/scripts'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },

      {
        test: /\.(svg|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource'
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },

  optimization: {
    minimize: false
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }]
    }),

    new HtmlWebpackPlugin({
      title: 'CPS',
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        removeComments: true
      }
    })
  ]
}
