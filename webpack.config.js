const path = require('path')
require('@babel/polyfill')

module.exports = {
	mode: 'production',
	watch: true,
	entry: [ '@babel/polyfill', './src/app.js' ],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		open: true
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
						plugins: [ '@babel/plugin-transform-runtime' ]
					}
				}
			}
		]
	}
}
