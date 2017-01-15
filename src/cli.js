const serve = require('./index');
const args  = process.argv.slice(2);
const root  = args[0];

if (root === '-h' || root === '--help') {
  console.log(`
  USAGE:
    serve-like-a-pro [dirname]
  `.trim());
} else {
  serve({ root });
}
