const weatherRoutes = require('./weather');

module.exports = function(app) {
  weatherRoutes(app);
};