const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(ttf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: './fonts/[name].[ext]'
					},
				},]
			}
		]
	},
	plugins: [htmlPlugin]
};