// dependecies
const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TercerWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const FontminPlugin = require('fontmin-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// elements of the webpack configuration
let rules = [];
const devServer = {
    contentBase: path.resolve(__dirname, 'dist/'),
    compress: true,
    port: 3000
}

// rules 
const rulesJS = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader'
    }
}

const rulesCss = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
    ]
}

const rulesPug = {
    test:  /\.pug$/,
    use: [
        'html-loader',
        'pug-html-loader'
    ]
}

const rulesJpg = {
    test: /\.(png|jpg)$/,
    type: 'asset/resource',
}

const rulesSvg = {
    test: /\.svg$/,
    type: 'asset/inline'
}

const rulesFont = {
    test: /\.ttf$/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 10000,
            minetype: 'application/font-ttf',
            name: '[name].[contenthash].[ext]',
            outputPath: './assets/fonts/',
            publicPath: './assets/fonts/',
            esModule: true
        }
    }
}

rules.push(rulesPug,rulesCss,rulesJS,rulesJpg,rulesSvg);

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.[contenthash].js',
        assetModuleFilename: "assets/images/[hash][ext]"
    },
    resolve: {
        extensions: ['.js']
    },
    module: { rules },
    devServer,
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/views/index.pug',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new FontminPlugin({
            autodetect: true, 
            glyphs: ['\uf0c8'],
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TercerWebpackPlugin(),
            new CssMinimizerWebpackPlugin()
        ]
    },
    mode: "production"
}
