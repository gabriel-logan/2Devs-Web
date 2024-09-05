const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader'],
			},

			// Regra para arquivos CSS
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CopyPlugin({
			patterns: [{ from: 'public/images', to: '.' }],
		}),
	],
	devtool: 'nosources-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'), // Diretório raiz para arquivos estáticos
			watch: true,
		},
		port: 3000,
		historyApiFallback: true, // Configuração para tratar rotas desconhecidas
		open: true,
		compress: true,
		hot: true,
	},
};
