const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

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
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    // Copy file:
                    from: path.resolve(__dirname, './src/favicon.ico'),
                    to: path.resolve(__dirname, './docs/favicon.ico')
                }
            ]
        })
    ]
}
