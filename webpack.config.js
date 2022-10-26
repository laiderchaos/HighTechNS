const path = require('path');

module.exports = {
    mode: "development",
    entry: './script/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
}