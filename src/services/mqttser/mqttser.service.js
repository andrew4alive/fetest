// Initializes the `mqttser` service on path `/mqttser`
const createService = require('./mqttser.class.js');
const hooks = require('./mqttser.hooks');


module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    name: 'mqttser',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mqttser', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mqttser');

  service.hooks(hooks);
};
