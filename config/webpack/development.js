const environment = require('./environment')
const path = require('path')
const config = environment.toWebpackConfig()

config.devServer = {
  contentBase: path.join(__dirname, "../../public"),
  historyApiFallback: {
    index: 'index.html'
  },
  compress: false,
  port: 9000
}
module.exports = config