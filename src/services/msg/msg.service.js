// Initializes the `msg` service on path `/msg`
const createService = require('feathers-mongodb');
const hooks = require('./msg.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/msg', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('msg');

  mongoClient.then(db => {
    service.Model = db.collection('msg');
  });

  service.hooks(hooks);

  app.service('/authentication').hooks({
    after: {
      create: [
        context => {
          context.result.user = context.params.user;
          //console.log(context.params.user);
          // Don't expose sensitive information.
          delete context.result.user.password;
        }
      ]
    }
  });
/*
  class me{
    async find(){
      return 'me';
    }

  }

  app.use('/me',new me());
*/
};
