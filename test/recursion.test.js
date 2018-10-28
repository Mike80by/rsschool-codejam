const {recursion} = require('./../recursion.js');
const assert = require('assert');
const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

describe('task', function() {
  describe('recursion', function() {
    it('test tree', function() {
    	assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
    });
  });
});