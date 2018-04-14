const environment = require('./environment')
const path = require('path')
const config = environment.toWebpackConfig()
config.devServer = {
  contentBase: path.join(__dirname, "../../public"),
  historyApiFallback: {
    index: 'index.html'
  },
  compress: true,
  port: 9000
}
console.log(JSON.stringify(config, null, 2))
module.exports = config