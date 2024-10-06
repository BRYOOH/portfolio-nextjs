const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ...
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.(gltf|glb)$/,
          loader: "gltf-webpack-loader",
          /**
           * @type {import("gltf-webpack-loader").GLTFLoaderOptions}
           */
          options: {
            uriResolver: (module) => {
              let result = module.default ?? module;
              // Use the "src" property returned by the `next-image-loader` if present:
              if (typeof result === "object" && "src" in result) result = result.src;
              return result;
            },
          },
        },
        {
          test: /\.(bin)$/,
          type: "asset/resource",
        }
      );
      return config;
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html', // Adjust to your HTML file
          filename: 'index.html',
        }),
      ],
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.gltf', '.glb'],
      },
    mode: 'production',
  };