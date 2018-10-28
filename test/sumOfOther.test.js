const {sumOfOther} = require('./../sumOfOther.js');
const assert = require('assert');

describe('task', function() {
  describe('sumOfOther', function() {
    it('should return array with every element equals sum of others', function() {
      assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
  });
});