const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // Inject styles into DOM
                    "css-loader", // Turns css into commonjs
                ]
            },
            {
                test: /\.{svg|png|jpg|gif}$/,
                use: []
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })]
}
