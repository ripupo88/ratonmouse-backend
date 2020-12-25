const assert = require('assert');
const app = require('../../src/app');

describe('\'raton\' service', () => {
  it('registered the service', () => {
    const service = app.service('raton');

    assert.ok(service, 'Registered the service');
  });
});
