var path = require("path");
module.exports = {
    mode: "development",
    resolve: {
        extensions: [ ".js", ".jsx", ".json" ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}

