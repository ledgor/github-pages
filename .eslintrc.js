module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module'
	},
	globals: {
		__dirname: false
	},
	rules: {
		indent: [
			'error',
			'tab'
		],
		linebreak-style: [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'never'
		]
	}
}
