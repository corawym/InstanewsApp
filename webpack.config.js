module.exports = {
  entry: "./js/script.js",
  devtool: "inline-source-map",
  output:{
    filename: "./build/bundle.js"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]&emitFile=false'
      },
      {
        test: /\.scss$/,
        use:[ 
          {loader:'style-loader'},
          {loader:'css-loader', options:{sourceMap: true}},
          {loader:'sass-loader', options:{sourceMap: true}} 
        ]
      }
    ]
  }, //end module
  devServer:{
    inline: true,
    watchOptions:{
      aggregateTimeout: 300,
      poll: 1000
    }
  }
} //end module export