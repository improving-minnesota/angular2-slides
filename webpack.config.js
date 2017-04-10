const getWebpackConfig = require('object-partners-presentation');
const path = require('path');

const configFn = getWebpackConfig({
  resolve: {
    alias: {
      resources: path.resolve('resources')
    }
  }
}, {
  dirname: __dirname
});

module.exports = configFn;
