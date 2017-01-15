const App    = require('./app');
const Config = require('./config');

module.exports = options => {
  const app = exports.setup(options);

  app.listen(config.port, () => {
    console.log(`listening on port: ${config.port}`);
  });
};

module.exports.setup = options => {
  const config = new Config(options);
  return new App(config);
};
