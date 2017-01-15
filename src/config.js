module.exports = function(options) {
  return Object.assign({
    port: process.env.PORT || 8080
  }, options);
};
