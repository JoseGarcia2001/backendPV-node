const assert = require('assert');
const buildMessages = require('../utils/buildMessages.js')

describe('utils - buildMessages', function() {
  describe('When receives an entity and an action', function() {
    it('should return the respective message', function() {
      const result = buildMessages('movie', 'create')
      const expect = 'movie created'
      assert.strictEqual(result, expect)
    })

  describe('When receives an entity and an action is a list', function() {
    it('should return the respective message with the entity in plural', function () {
      const result = buildMessages('movie', 'list');
      const expect = 'movies listed';
      assert.strictEqual(result, expect);
      });
    });
  })
})