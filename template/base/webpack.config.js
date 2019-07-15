const merge = require('webpack-merge');

// Load our common webpack configuration here.
const common = require('./build/webpack.common.js');

// Merge common configuration with dev or prod configuration (default: prod).
module.exports = (env, argv) => {
  let mode = 'prod';
  if (argv !== 'production') {
    mode = 'dev';
  }

  const config = require(`./build/webpack.${mode}.js`);
  return merge(common, config);
};
