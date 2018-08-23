module.exports = {
  entry: './app/index.js', // assumes your entry point is the index.js in the root of your project folder
  output: {
    path: __dirname,
    filename: './public/bundle.js', // assumes your bundle.js will also be in the root of your project folder
    publicPath: '/public/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$|\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
        loader: 'file-loader'
      }
    ]
  }
};
