// Lone Wolf calculator



// Chatterbox Calculator

// Define variables

var gb = 0;
var mins = 0;

var total = 0;

// User(clicks) selects GB

$('GB').click(function(event) {
  var gb = parseInt(this.getAttribute("value"));
  return options_added();
}

// User(clicks) selects mins

$('minutes').click(function(event) {
  var mins = parseInt(this.getAttribute("value"));
}

// GB and mins values added together—monthly is the default and var total

function options_added() {
  var total = gb + mins;
  $("#total").text(total);
}



// listen for user clicks annually

$('annually').click(function(event) {
  var total * 12 = total;
  $("#total").text(total);

}

// listen for user clicks Monthly

$('monthly').click(function(event) {
  var total / 12 = total;
  $("#total").text(total);

}

// Button BUY NOW appears after var total sum function done
