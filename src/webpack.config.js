const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: "./src/app/Components/EarthCanvas.js",
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
        },
 module:{
        rules: [
        {
            test: /\.(gltf|glb)$/,
            use: [
                {
                    loader: 'gltf-webpack-loader'
                }
            ]
        },
            ]
        }  , 

    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    mode: 'production',
    };
        
