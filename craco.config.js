const { resolve } = require('path');

const { PATHS } = require('./app-config');

module.exports = {
  webpack: {
    alias: {
      '@components': resolve(PATHS.COMPONENTS),
      '@pages': resolve(PATHS.PAGES),
      '@recoils': resolve(PATHS.RECOILS),
    },
  },
};
