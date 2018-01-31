const msg = require('./msg/msg.service.js');
const users = require('./users/users.service.js');
var mqtt = require('mqtt');


const mqttser = require('./mqttser/mqttser.service.js');


const mqttTopic = require('./mqtt-topic/mqtt-topic.service.js');


const mqttcon = require('./mqttcon/mqttcon.service.js');


module.exports = function (app) {
  app.configure(msg);
  app.configure(users);
  app.configure(mqttTopic);
  app.configure(mqttcon);
  app.configure(mqttser);
};
