const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    entry: "./server.js",
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.server.js"
    }
})