const msg = require('./msg/msg.service.js');
const users = require('./users/users.service.js');
var mqtt = require('mqtt');


const mqttser = require('./mqttser/mqttser.service.js');


module.exports = function (app) {
  app.configure(msg);
  app.configure(users);
  app.configure(mqttser);
};
