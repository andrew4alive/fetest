const { authenticate } = require('@feathersjs/authentication').hooks;

var createbefore = require('./createbefore');
var findbefore = require('./findbefore');
var nowallow = require('../notallow.hook.js');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [findbefore()],
    get: [nowallow()],
    create: [createbefore()],
    update: [nowallow()],
    patch: [nowallow()],
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
