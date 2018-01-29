/* eslint-disable no-unused-vars */
var mqttdb = require('./mqttdb');

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
    /*if (Array.isArray(data)) {
      return await Promise.all(data.map(current => this.create(current)));
    }

    return data;*/
  }

  async update (id, data, params) {
    return data;
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
