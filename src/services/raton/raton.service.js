// Initializes the `raton` service on path `/raton`
const { Raton } = require('./raton.class');
const createModel = require('../../models/raton.model');
const hooks = require('./raton.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/raton', new Raton(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('raton');

  service.hooks(hooks);
};
