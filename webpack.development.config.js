module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(sa|s?c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}
