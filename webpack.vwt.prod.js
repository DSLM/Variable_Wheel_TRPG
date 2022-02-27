var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'vwt'),
        filename: 'main.js'
    }
};
