module.exports = function(options) {
  const root = options.root || process.cwd();
  const favicon = `${root}/favicon.ico`;
  const fallback = `${root}/404.html`;

  return Object.assign({
    root,
    favicon,
    fallback,
    port: process.env.PORT || 8080,
    gzip: true
  }, options);
};
