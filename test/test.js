console.log('scroll-percent: test');

// modules
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opener = require('opener');

const config = {
	entry: {
		app: [
			"webpack-dev-server/client?http://localhost:8080/",
			"webpack/hot/dev-server",
			'./test/index.js'
		]
	},
	output: {
		path: __dirname,
		filename: 'bundle_index.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: [
					"es2015",
					"stage-0"
				]
			},
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), //hotの依存
	]
}

const instance = webpack(config);

const server = new webpackDevServer(instance, {
	contentBase: "./test/",
	hot: true,
	inline: true
});
server.listen(8080);
opener('http://localhost:8080/');
