const path = require("path")
const common = require("./webpack.config.common")
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "docs")
    },
    plugins: [new CleanWebpackPlugin()]
})
