const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    resolve: {
        alias: {
            '@features': path.resolve(resolveApp('src'), 'features'),
            '@ui': path.resolve(resolveApp('src'), 'shared-ui'),
            '@pages': path.resolve(resolveApp('src'), 'pages'),
            '@api': path.resolve(resolveApp('src'), 'api'),
            '@hooks': path.resolve(resolveApp('src'), 'hooks'),
        },
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './dist',
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true,
                headers: {
                    Connection: 'keep-alive',
                },
            },
        },
        hot: true,
        historyApiFallback: true,
    },
}
