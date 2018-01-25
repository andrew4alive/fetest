const assert = require('assert');
const app = require('../../src/app');

describe('\'msg\' service', () => {
  it('registered the service', () => {
    const service = app.service('msg');

    assert.ok(service, 'Registered the service');
  });
});
