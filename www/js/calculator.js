define([], function() {

  return function Calculator() {

    var _operandLeft;
    var _operandRight;
    var _result;
    var _operation;

    function clear() {
      _operandLeft = "0";
      _operandRight = "0";
      _operation = "";
      return _result = "0";
    }

    clear();

    function setNumber(x) {
      var target = "";

      if(_operation == "") {
        target = _operandLeft;
      } else {
        target = _operandRight
      }

      if(target != "0") {
        // Append to the previous number
        target = target + "" + x;
      } else {
        // If we're at 0 then we'll just use the input instead
        target = "" + x;

        // Unless our input is a decimal
        if(x == ".") {
          target = "0.";
        }
      }

      if(_operation == "") {
        return _result = _operandLeft = target;
      } else {
        return _result = _operandRight = target;
      }
    }

    // Result will return the latest entered or
    this.result = function() {
      return _result;
    };

    this.input = function(x) {
      var number = Number(x);

      // Have we a number?
      if(number < 10 && number > -1) {
        return setNumber(x);
      }

      // A decimal?
      if(x == ".") {
        // Only 1 allowed
        if(!this.result().match(/\./)) {
          return setNumber(x);
        }
      }

      // Clear?
      if(x.match(/^c$/i)) {
        return clear();
      }

      // Add Subtract Multiply or Divide?
      if(x.match(/^[\+\-x*\/]$/i)) {
        if(x.match(/x/)) {
          x = "*";
        }
        return _operation = x;
      }

      // Execute
      if(x == "=") {
        // A fun way to simplify how we perform the operation
        // eval lets us create a string and run it on demand
        return _operandLeft =_result = eval(_operandLeft + _operation + _operandRight);
      }
    };
  };
});
