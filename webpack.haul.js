const path = require('path');

module.exports = ({ platform, root }, defaults) => ({
  entry: `./src/mobile/index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    alias: {
      ...defaults.resolve.alias,
      shared: path.join(root, 'src/shared'),
      'styled-primitives': path.join(root, 'src/shared/components/primitives'),
      components: path.join(root, 'src/mobile/components'),
      containers: path.join(root, 'src/mobile/containers'),
    },
  },
});
