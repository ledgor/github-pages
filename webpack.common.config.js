const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		frontpage: './src/frontpage/index.js',
		callback: './src/callback/index.js'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /\/node_modules\//,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/plugin-transform-runtime',
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			},
			{ test: /\.pug$/, use: 'pug-loader' },
			{
				test: /\.(sa|s?c)ss$/,
				use: [
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.json', '.scss', '.sass', '.css']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/frontpage/index.pug',
			filename: 'index.html',
			chunks: ['runtime', 'vendor', 'frontpage']
		}),
		new HtmlWebpackPlugin({
			template: 'src/callback/index.pug',
			filename: 'callback/index.html',
			chunks: ['runtime', 'vendor', 'callback']
		})
	]
}
