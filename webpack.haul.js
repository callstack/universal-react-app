const path = require('path');

module.exports = ({ platform, root }, defaults) => ({
  entry: `./src/mobile/index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    alias: {
      ...defaults.resolve.alias,
      'styled-primitives': path.join(root, 'src/shared/components/primitives'),
      shared: path.join(root, 'src/shared'),
      components: path.join(root, 'src/mobile/components'),
      containers: path.join(root, 'src/mobile/containers'),
    },
  },
});
