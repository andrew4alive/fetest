const assert = require('assert');
const app = require('../../src/app');

describe('\'mqttser\' service', () => {
  it('registered the service', () => {
    const service = app.service('mqttser');

    assert.ok(service, 'Registered the service');
  });
});
