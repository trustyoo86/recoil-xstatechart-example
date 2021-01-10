const { resolve } = require('path');

const ROOT = resolve(__dirname);

const SRC_PATH = resolve(ROOT, 'src');

exports.PATHS = {
  SRC: SRC_PATH,
  COMPONENTS: resolve(SRC_PATH, 'components'),
  PAGES: resolve(SRC_PATH, 'pages'),
  RECOILS: resolve(SRC_PATH, 'recoils'),
};
