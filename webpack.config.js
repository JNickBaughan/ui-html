const path = require("path");
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    entry: "./app.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
})