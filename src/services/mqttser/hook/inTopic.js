// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

var mqtt = require('mqtt');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    var client  = mqtt.connect('mqtt://peceohdh:CgstCRATNRdx@m14.cloudmqtt.com:16244 ');
   await  client.on('connect', function () {
    //  client.subscribe('presence')
    console.log('connected');
      //client.publish('presence', 'Hello mqtt');
      client.publish('inTopic', 'Toggle led');
      //
    });
    console.log('mqtt hello');
    /*client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      client.end()
    })*/
    //await client.end(false);
    return context;
  };
};
