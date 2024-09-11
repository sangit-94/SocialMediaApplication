const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server.ts", // Entry point of your application
  target: "node", // Since it's a Node.js application
  externals: [nodeExternals()], // Exclude node_modules from the bundle
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "~": path.resolve(__dirname, "src/"), // Define alias for the src directory
    },
  },
  output: {
    filename: "server.js", // Output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
