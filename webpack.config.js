'use strict';

const webpack = require('webpack');
const path = require("path");
let externals = _externals();

module.exports = {
    entry: {
        app: './bin/template/index.js',
    },
    target: 'node',
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['*', '.js', ".jsx"]
    },
    externals: externals,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             use: 'babel',
    //             // query: {
    //             //     presets: ['es2015','stage-0']
    //             // },
    //             exclude: /node_modules/
    //         }
    //     ]
    // },
    plugins: [
      //  new webpack.optimize.UglifyJsPlugin()
    ]
};

function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}
