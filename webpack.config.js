const path = require('path')
const env = require('process').env
const merge = require('webpack-merge')

const commonConfig = require(
	path.join(__dirname, 'webpack.common.config.js')
)

const envConfig = require(
	path.join(__dirname, `webpack.${env.NODE_ENV || 'development'}.config.js`)
)

module.exports = merge.smart(commonConfig, envConfig)
