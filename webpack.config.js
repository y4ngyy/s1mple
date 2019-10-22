const path = require('path');

module.exports = {
  mode: 'development',
  entry: './source-src/main.js',
  output: {
    path: path.resolve(__dirname, 'source'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use:
        [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env']}
          },
          {
            loader: 'eslint-loader'
          }
      ]
      },
      {
        test: /\.(scss|sass|css)$/,
        loaders:['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(woff|svg|eot|ttf)$/,
        loader: "file-loader?name=fonts/[name].bundle.[ext]"
      },
      {
        test:/\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }

    ]
  }
};