const raton = require('./raton/raton.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(raton);
};
