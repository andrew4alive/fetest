// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

var mqtts = require('../mqttcon');
var mqttdb = require('../mqttdb');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
      if(context.method == "get"){
      mqtts.publish('inTopic', 'Toggle led');
    
    }

  //  console.log(context.result);
  //context.result.data = {msg:"yeah"};
    return context;
  };
};
