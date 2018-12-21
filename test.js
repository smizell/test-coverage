const assert = require('assert');
const app = require('.');

describe('Test Coverage', function () {
  context('when true', function () {
    it('returns 12', function () {
      const value = app.alwaysTwelve(true, true);
      assert.equal(value, 12);
    });
  });

  context('when false', function () {
    it('returns 12', function () {
      const value = app.alwaysTwelve(false, false);
      assert.equal(value, 12);
    });
  });
});
