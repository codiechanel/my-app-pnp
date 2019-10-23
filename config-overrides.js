const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  //   config.plugins = [new BundleAnalyzerPlugin()]
  return config
}
