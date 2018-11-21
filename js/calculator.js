// Chatterbox Calculator

// Define variables

var gb = 0;
var mins = 0;

var total = 0;

// User(clicks) selects GB

$('GB').click(function(event) {
  var gb = parseInt(this.getAttribute("value"));
}

// User(clicks) selects mins

$('minutes').click(function(event) {
  var mins = parseInt(this.getAttribute("value"));
}

// GB and mins values added together—monthly is the default and var total

function options_added() {
  var total = gb + mins;
}
// listen for user clicks annually
// listen for user clicks Monthly
// Button BUY NOW appears after var total sum function done
