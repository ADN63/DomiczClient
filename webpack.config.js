const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {WebpackManifestPlugin} = require("webpack-manifest-plugin");

const { webpack } = require('webpack');
const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";


module.exports = {
    entry: './src/index.tsx',
    mode: isProduction ? "production" : "development",
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            title: "Domicz Cross FirmWare"
        }),
        new MiniCssExtractPlugin({ filename: "static/css/styles.css" }),
        new WebpackManifestPlugin({basePath : "./",  writeToFileEmit : true}),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    devServer: {
        open: true,
        host: "localhost",
        static: {
            directory: path.join(__dirname, "dist")
        }

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader'],
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=/static/media/[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            },
            {
                test: /\.link\.css$/i,
                use: [
                    { loader: "style-loader", options: { injectType: "linkTag" } },
                    { loader: "file-loader" },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
    output: {
        filename: 'static/js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};