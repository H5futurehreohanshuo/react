/* webpack.config.js */

var webpack = require('webpack');

module.exports = {
	entry : './entry.js',
	output : {
		path : __dirname,
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.css$/,
				loader : 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
			},
			{
				test : /\.scss/,
				loader : 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader?outputStyle=expanded'
			},
			{
				test : /\.json$/,
				loader : 'json-loader'
			},
			{
		        test: /\.js$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
		        query: {
		          	presets: ['es2015','react']
		        }
		    },
		    {
		    	test : /\.(png|jpg|woff|woff2)$/,
		    	loader : 'url-loader?limit=8192'
		    }
		]
	},
	devServer : {
		inline : true
	},
	plugins : [
		new webpack.BannerPlugin('This is is created by Hanshuo')
	]
}