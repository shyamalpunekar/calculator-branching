$(document).ready(function() {
  var add = function(number1, number2) {
    return number1 + number2;
  }

  $("#calculator").submit(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=opertor]:checked")
    var result = add(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  })
});
