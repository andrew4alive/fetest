// Initializes the `mqtt-topic` service on path `/mqtt-topic`
const createService = require('feathers-mongodb');
const hooks = require('./mqtt-topic.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/mqtt-topic', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mqtt-topic');

  mongoClient.then(db => {
    service.Model = db.collection('mqtt-topic');
  });

  service.hooks(hooks);
};
