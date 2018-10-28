const {make} = require('./../make.js');
const assert = require('assert');

function sum(a, b) {
	return a + b;
}

describe('task', function() {
  describe('make', function() {
    it('test', function() {
      assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
      assert.equal(make(15)(129)(41)(sum), 185);
    });
  });
});