/* eslint-disable no-unused-vars */
var mqttdb = require('./mqttdb');
var mqtts = require('./mqttcon');
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    var r= {};
    await mqttdb.get('mqttdata',{}).then(function(item){
     //console.log(item);
     r = item;
   });
   return r;
    //return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {

    mqttdb.insertlimit('mqttdata',{
      topic:data.topic, message:data.message,createdAt:data.createdAt
    },
    5,{topic:data.topic}
    );

   return "";

  }

  async update (id, data, params) {
    mqtts.connect(data.userid,data.url,getmqtt);

      function getmqtt(topic,message){

        service.create({
          topic:topic, message:message,createdAt:new Date().getTime()
        });

      };
    return "";
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
