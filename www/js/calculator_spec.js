var requirejs = require("requirejs");
var assert = require("assert");

requirejs.config({
    baseUrl: 'www/js',
    nodeRequire: require
});

describe('Calculator', function() {
  var calculator;
  var Calculator;

  before(function(done) {
    requirejs(['calculator'], function(calculatorjs) {
      Calculator = calculatorjs;
      done();
    });
  });

  beforeEach(function() {
    calculator = new Calculator();
  });

  // Our Calculator Should Take Numerical Input
  describe('input', function() {
    it('should accept input commands for all numbers and return each one as the result', function() {
      var inputCalculator;
      for(var i = 0; i < 10; i++) {
        inputCalculator = new Calculator();
        inputCalculator.input(i);
        assert.equal(i, inputCalculator.result());
      }
    });

    it('should accept multiple numbers and increase the result by appending each number to the previous', function() {
      calculator.input(1);
      calculator.input(2);
      assert.equal("12", calculator.result());
    });

    it('should accept numbers and decimal as valid input types', function() {
      calculator.input("L");
      assert.equal("0", calculator.result());

      calculator.input(8);
      assert.equal("8", calculator.result());

      calculator = new Calculator();
      calculator.input(".");
      assert.equal("0.", calculator.result());
    });

    it('should only accept 1 decimal', function() {
      calculator.input(".");
      calculator.input("5");
      calculator.input(".");
      assert.equal("0.5", calculator.result());
    });

    // Clear Functionality
    it('should clear the result when passed the letter c', function() {
      calculator.input("5");
      calculator.input('c');
      assert.equal('0', calculator.result());
    });

    // Operands
    it('should execute the add command when passed [number, "+", number, "="]', function() {
      calculator.input("5");
      calculator.input("+");
      calculator.input("4");
      calculator.input("=");
      assert.equal("9", calculator.result());
    });

    it('should execute the subtract command when passed [number, "-", number, "="]', function() {
      calculator.input("5");
      calculator.input("-");
      calculator.input("4");
      calculator.input("=");
      assert.equal("1", calculator.result());
    });

    it('should execute the multiply command when passed [number, "x", number, "="]', function() {
      calculator.input("5");
      calculator.input("x");
      calculator.input("4");
      calculator.input("=");
      assert.equal("20", calculator.result());
    });


    it('should execute the multiply command when passed [number, "*", number, "="]', function() {
      calculator.input("5");
      calculator.input("*");
      calculator.input("4");
      calculator.input("=");
      assert.equal("20", calculator.result());
    });

    it('should execute the divide command when passed [number, "/", number, "="]', function() {
      calculator.input("5");
      calculator.input("/");
      calculator.input("4");
      calculator.input("=");
      assert.equal("1.25", calculator.result());
    });

    it('should show the current number when in the middle of inputing an operation', function() {
      calculator.input("5");
      calculator.input("/");
      assert.equal("5", calculator.result());
      calculator.input("4");
      assert.equal("4", calculator.result());
    });

    it('should continue executing the last operation on subsequent = inputs [number, "+", number, "=", "="]', function() {
      calculator.input("5");
      calculator.input("+");
      calculator.input("4");
      calculator.input("=");
      assert.equal("9", calculator.result());
      calculator.input("=");
      assert.equal("13", calculator.result());
    });
  })
});
