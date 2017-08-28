module.exports = ({ platform }) => ({
  entry: `./src/mobile/index.${platform}.js`,
});
