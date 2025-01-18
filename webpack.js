const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");


module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },{
        test: /\.s?[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },{
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.d.tsx'],
    alias: {
      '@api': path.resolve(__dirname, 'src/share/api'),
      '@env': path.resolve(__dirname, 'src/share/env'),
      '@component': path.resolve(__dirname, 'src/share/component'),
      '@hook': path.resolve(__dirname, 'src/share/hook'),
      '@store': path.resolve(__dirname, 'src/share/store'),
      '@url': path.resolve(__dirname, 'src/share/url'),
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        "./public"
      ]
    }),
    new Dotenv({
      path: ".env"
    })
  ],
};