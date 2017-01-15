const fs          = require("fs");
const http        = require("http");
const connect     = require("connect");
const compression = require('compression');
const favicon     = require('serve-favicon');
const statics     = require('serve-static');

module.exports = function(config) {
  const app = connect();

  config.gzip && app.use(assets_compression());

  app.use(statics(config.root));
  app.use(favicon(config.favicon));

  app.use(terminal_fallback(config));

  return app;
}

function assets_compression() {
  return compression({
    level:  9,
    filter: req => /\.(css|js|xml|json|md|svg)$/.test(req.url)
  });
}

function terminal_fallback(config) {
  return (req, res) => {
    const isHtmlRequest = !/.+?\.[a-z]+$/.test(req.url);

    if (isHtmlRequest) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.write(fs.readFileSync(config.fallback));
    } else {
      res.writeHead(404);
    }

    res.end();
  }
}

// /////////////////////////////////////////////////////////
// // private, middleware and stuff
//
// // handles the caching settings
// function production_caching() {
//   var re = /(application-[a-z0-9]+\.(js|css))|(\.(jpg|jpeg|png|gif|ico))/;
//
//   return function(req, res, next) {
//     if (production && re.test(req.url)) {
//       res.setHeader('Cache-Control', 'public, max-age='+one_year);
//     }
//
//     next();
//   };
// }
//
// // serves cached html/atom/css/js files
// function serve_cached_data() {
//   var cache = read_cacheable_data();
//
//   return function(req, res, next) {
//     !production && (cache = read_cacheable_data());
//
//     if (/\/atom\.xml/.test(req.url)) {
//       res.setHeader("Content-type", "application/atom+xml");
//       res.write(cache['data']); res.end();
//     } else if (/\/application-.+?\.js/.test(req.url)) {
//       res.setHeader("Content-type", "text/javascript");
//       res.write(cache['scripts']); res.end();
//     } else if (/\/application-.+?\.css/.test(req.url)) {
//       res.setHeader("Content-type", "text/css");
//       res.write(cache['styles']); res.end();
//     } else if (!/.+?\.[a-z]+$/.test(req.url)) {
//       res.setHeader("Content-type", "text/html");
//       res.write(cache['html']); res.end();
//     } else {
//       next();
//     }
//   }
// }
