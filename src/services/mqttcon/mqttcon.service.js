// Initializes the `mqttcon` service on path `/mqttcon`
const createService = require('feathers-mongodb');
const hooks = require('./mqttcon.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/mqttcon', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mqttcon');

  mongoClient.then(db => {
    service.Model = db.collection('mqttcon');
  });

  service.hooks(hooks);
};
