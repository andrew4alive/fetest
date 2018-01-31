const assert = require('assert');
const app = require('../../src/app');

describe('\'mqttcon\' service', () => {
  it('registered the service', () => {
    const service = app.service('mqttcon');

    assert.ok(service, 'Registered the service');
  });
});
