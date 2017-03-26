'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const webpackConfigProd = require('./config/webpack.config.prod');
const createWebpackCompiler = require('./utils/create-webpack-compiler');
const colors = require('chalk');

function build(config) {
  const compiler = createWebpackCompiler(config);

  compiler.run((err) => {
    if (err) {
      throw err;
    }

    console.log('');
    console.log(colors.green('Compiled successfully.'));
  });
}

build(webpackConfigProd);
