const assert = require('assert');
const app = require('../../src/app');

describe('\'mqtt-topic\' service', () => {
  it('registered the service', () => {
    const service = app.service('mqtt-topic');

    assert.ok(service, 'Registered the service');
  });
});
