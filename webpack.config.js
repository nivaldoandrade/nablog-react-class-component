const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, "build"),
		filename: "bundler[hash].js",
		clean: true
	},

	plugins: [
		new htmlWebPackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		})
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},

	devServer: {
		port: 3000,
		historyApiFallback: true
	}

}