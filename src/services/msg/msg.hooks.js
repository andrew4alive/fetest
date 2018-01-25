const { authenticate } = require('@feathersjs/authentication').hooks;
const  processMsg  = require('../../hooks/process-msg.js');

module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [ processMsg(),authenticate('jwt') ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
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
