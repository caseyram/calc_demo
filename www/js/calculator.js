define([], function() {

  return function Calculator() {

    var _operandLeft;
    var _operandRight;
    var _result;
    var _operation;
    var _lastInput;

    function clear() {
      _operandLeft = "0";
      _operandRight = "0";
      _operation = "";
      _lastInput = "";
      return _result = "0";
    }

    clear();

    function setNumber(x) {
      var target = "";

      // Starting a new operation with last operand
      if(_lastInput == "=") {
        _operandLeft = _operandRight;
        _operandRight = "0";
      }

      if(_operation == "") {
        target = _operandLeft;
      } else {
        target = _operandRight
      }

      // Only 1 decimal allowed
      if(x == "." && target.match(/\./)) {
        return;
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

      _lastInput = x;
      if(_operation == "") {
        return _result = _operandLeft = target;
      } else {
        return _result = _operandRight = target;
      }
    }

    function execute() {
      if(_operation != "") {
        if(_operandRight == "0" || _operandRight == "") {
          _operandRight = _operandLeft;
        }
        // A fun way to simplify how we perform the operation
        // eval lets us create a string and run it on demand
        return _operandLeft = _result = eval(_operandLeft + _operation + Number(_operandRight)) + "";
      }
    }

    //
    // Public Result Function
    //
    // Use this function to get the display result of the calculator
    this.result = function() {
      return _result;
    };

    //
    // Public Input Function
    //
    // Use this function to enter calculator input character events
    this.input = function(x) {
      if(!(x + "").match(/[0-9cx\=\+\-\*\/\.]/i)) {
        return;
      }
      var number = Number(x);

      // Have we a number?
      if(number < 10 && number > -1) {
        return setNumber(x);
      }

      // A decimal?
      if(x == ".") {
        return setNumber(x);
      }

      // Clear?
      if(x.match(/^c$/i)) {
        return clear();
      }

      // Add Subtract Multiply or Divide?
      if(x.match(/^[\+\-x*\/]$/i)) {
        if(x.match(/x/i)) {
          x = "*";
        }
        if(_operation != "" && _lastInput != "=") {
          _result = execute();
          _operandRight = "0";
        } else if(_lastInput == "=") {
          _operandLeft = _result;
          _operandRight = "0";
        }
        _operation = x;
        _lastInput = x;
        return _operandLeft;
      }

      // Execute
      if(x == "=") {
        _lastInput = x;
        return execute();
      }
    };
  };
});
