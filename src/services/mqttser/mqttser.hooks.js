const { authenticate } = require('@feathersjs/authentication').hooks;
const toggleLEd = require('./hook/inTopic.js');
//var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://peceohdh:CgstCRATNRdx@m14.cloudmqtt.com:16244 ');
//mqtt://USER:PASSWORD@host:port
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [toggleLEd()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
