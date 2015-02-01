var requirejs = require("requirejs");
var assert = require("assert");

requirejs.config({
    baseUrl: 'www/js',
    nodeRequire: require
});

describe('Calculator', function() {
  var calculator;

  before(function(done) {
    requirejs(['calculator'], function(Calculator) {
      calculator = new Calculator();
      done();
    });
  });

  describe('add', function() {
    it('should return the sum of two integers', function() {
      assert.equal(4, calculator.add(1, 3));
    });
  });

  describe('subtract', function() {
    it('should return the difference of two integers', function() {
      assert.equal(2, calculator.subtract(3, 1));
    });
  });

  describe('multiply', function() {
    it('should return the product of two integers', function() {
      assert.equal(6, calculator.multiply(3, 2));
    });
  });

  describe('divide', function() {
    it('should return the quotient of two integers which produces no remainder', function() {
      assert.equal(6, calculator.divide(24, 4));
    });

    it('should return the quotient of two integers which produces a remainder', function() {
      // here we round to two decimal places to simplify equality consistency
      assert.equal(3.43, calculator.divide(24, 7).toFixed(2));
    });
  });
});
