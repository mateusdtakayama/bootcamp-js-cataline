const path = require('path')
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        hot: true,
    },
    plugins: [
        new LiveReloadPlugin()
      ],

}