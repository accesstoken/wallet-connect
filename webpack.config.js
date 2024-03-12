// webpack.config.js
const path = require('path');

module.exports = {
    entry: './js/main.js', // Adjust the entry point to your main JS file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development', // Use 'production' for production builds
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
