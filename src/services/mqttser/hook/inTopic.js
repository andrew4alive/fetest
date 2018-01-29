// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

var mqtts = require('../mqttcon');
var mqttdb = require('../mqttdb');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
      if(context.method == "get"){
        if(context.params.user._id=="5a5c3687927f5b246017bff7")
      mqtts.publish('inTopic', 'Toggle led');
    //  console.log(context.params.user._id);

    }

    if(context.method=="get"||context.method=="find"){
    //console.log(context.params.user._id!="5a5c3687927f5b246017bff7");
    if(context.params.user._id!="5a5c3687927f5b246017bff7"){
      context.result={};
    }
  }
  //  console.log(context.result);
  //context.result.data = {msg:"yeah"};
    return context;
  };
};
