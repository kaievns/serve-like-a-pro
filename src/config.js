const fs = require('fs');

const defaultFavicon = `${__dirname}/../test/site/favicon.ico`;
const defaultFallack = `${__dirname}/../test/site/404.html`;

module.exports = function(options = {}) {
  const root = options.root || process.cwd();
  const favicon = `${root}/favicon.ico`;
  const fallback = `${root}/404.html`;

  return Object.assign({
    root,
    favicon:  fs.existsSync(favicon) ? favicon : defaultFavicon,
    fallback: fs.existsSync(fallback) ? fallback : defaultFallack,
    port:     process.env.PORT || 8080,
    gzip:     true
  }, options);
};
