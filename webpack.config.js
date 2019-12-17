const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  watch: false,
  mode: "production",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/,
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  }
};
