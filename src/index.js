const App    = require('./app');
const Config = require('./config');

const boot = options => {
  const { app, config } = boot.setup(options);

  app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}`);
  });
};

boot.setup = options => {
  const config = new Config(options);
  const app = new App(config);

  return { app, config };
};

module.exports = boot;
