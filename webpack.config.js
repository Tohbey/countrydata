const path = require("path");

module.exports = {
    entry: './index.ts',
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {test: /\.ts?$/, use: 'ts-loader'}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    }
}