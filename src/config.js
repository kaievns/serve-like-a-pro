module.exports = function(options) {
  const root = options.root || process.cwd();
  const favicon = `${root}/favicon.ico`;

  return Object.assign({
    root,
    favicon,
    port: process.env.PORT || 8080
  }, options);
};
