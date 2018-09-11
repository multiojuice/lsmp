module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: "react-svg-loader",
        options: {
          jsx: true // true outputs JSX tags
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    https: false,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    disableHostCheck: true
  }
};
