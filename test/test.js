var assert = require('assert');
var triangleChallenge = require('../triangleChallenge.js');

describe('isTriangle()', function() {
    it('it must return false if array is not triangle', function() {
      assert.equal(triangleChallenge.isTriangle([1,2,3]), false);
      assert.equal(triangleChallenge.isTriangle([6,6,8]), true);
      assert.equal(triangleChallenge.isTriangle([5.5,2.3,1.4]), false);
      assert.equal(triangleChallenge.isTriangle([4,4,4]), true);
      assert.equal(triangleChallenge.isTriangle([8,4,9]), true);
    });
});

describe('validateInputs()', function() {
    it('it must return false if array has number < 1 and undefined', function() {
      assert.equal(triangleChallenge.validateInputs([2,7,8]), true);
      assert.equal(triangleChallenge.validateInputs([7,-7,2]), false);
      assert.equal(triangleChallenge.validateInputs([4,1, ]), false);
      assert.equal(triangleChallenge.validateInputs([NaN,6,8]), false);
      assert.equal(triangleChallenge.validateInputs([0,0.5,8]), false);
      assert.equal(triangleChallenge.validateInputs([8,4,9]), true);
    });
});

describe('detectTriangle()', function() {
    it('it must return 1 for isosceles, 2 for equilateral and 3 for scalene Triangle', function() {
      assert.equal(triangleChallenge.detectTriangle([2.7,7,8]), 3);
      assert.equal(triangleChallenge.detectTriangle([5,7,5]), 2);
      assert.equal(triangleChallenge.detectTriangle([3.2,3.2,3.2]), 1);
      assert.equal(triangleChallenge.detectTriangle([3,6,8]), 3);
    });
});
