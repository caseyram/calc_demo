// Just to simplify some event handling, we're gonna bring in jQuery
requirejs.config({
  "paths": {
    "jquery": "//code.jquery.com/jquery-2.1.3.min"
  }
});

require(["calculator", "jquery"], function(Calculator, $) {
  var calculator = new Calculator();

  $("button").click( function(e) {
    calculator.input($(e.target).html());
    $("input").val(calculator.result());
  });

  $(window).on("keypress", function(e) {
    switch(e.which) {
      case 13:
        calculator.input("=");
        break;
      default:
        calculator.input(String.fromCharCode(e.which));
        break;
    }
    $("input").val(calculator.result());
  });
});
