// Initializes the `mqttser` service on path `/mqttser`
const createService = require('./mqttser.class.js');
const hooks = require('./mqttser.hooks');

var mqtts = require('./mqttcon');
var mqttdb = require('./mqttdb');

module.exports = function (app) {


    mqttdb.name="fe";
    mqtts.connect(getmqtt);

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

  function getmqtt(topic,message){

    service.create({
      topic:topic, message:message,createdAt:new Date().getTime()
    });
    /*mqttdb.insertlimit('mqttdata',{
      topic:topic, message:message,createdAt:new Date().getTime()
    },
    5,{topic:topic}
  );*///////
    //mqttdb.get('mqttdata',{});
  };

  app.on('login',function(r,m){
      mqtts.subcribe('sensor1/temp');
  });


};
