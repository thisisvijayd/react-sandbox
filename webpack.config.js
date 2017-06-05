

var config = {
   entry: '/Users/vijayraghavan.d/github/react-sandbox/main.js',

   output: {
      path:'/Users/vijayraghavan.d/github/react-sandbox/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8181
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
