const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js',
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
		usedExports: true,
	},
	module: {
		rules: [
			{
				test: /\.ts$|tsx/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							compilerOptions: { noEmit: false },
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
						},
					},
					'url-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public/favicon.svg', to: 'favicon.svg' },
				{ from: 'public/manifest.json', to: 'manifest.json' },
			],
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		preferRelative: true,
		fallback: {
			fs: false,
			tls: false,
			net: false,
			path: false,
			zlib: false,
			http: false,
			https: false,
			stream: false,
			crypto: false,
			constants: require.resolve('constants-browserify'),
			'crypto-browserify': require.resolve('crypto-browserify'),
			os: false,
		},
		alias: {
			react: path.resolve(__dirname, 'node_modules/react'),
			process: 'process/browser',
			app: path.resolve(__dirname, 'src/app/'),
			assets: path.resolve(__dirname, 'src/assets/'),
			components: path.resolve(__dirname, 'src/components/'),
			helpers: path.resolve(__dirname, 'src/helpers/'),
			views: path.resolve(__dirname, 'src/views/'),
		},
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
