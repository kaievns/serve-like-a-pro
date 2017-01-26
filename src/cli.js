#! /usr/bin/env node

const serve = require('./index');
const args  = process.argv.slice(2);
const opts  = findOptions(args);
const root  = args[0];

if (opts.help) {
  console.log(`
  USAGE:
    serve-like-a-pro [dirname] [OPTIONS]

  OPTIONS:
    -f --fallback file
    -v --verbose
    -h --help
  `.trim());
} else {
  serve(Object.assign({ root }, opts));
}

function findOptions(args) {
  return args.reduce((options, arg, i) => {
    switch (arg) {
      case '-h':
      case '--help':
        options.help = true;
        break;

      case '-f':
      case '--fallback':
        options.fallback = args[i+1];
        break;

      case '-v':
      case '--verbose':
        options.log = true;
        break;
    }

    return options;
  }, {});
}
