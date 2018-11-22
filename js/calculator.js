// Lone Wolf calculator
var price = 0;
var schedule = 0;
var months = 0;
var total = 0;

$('#wolf--calculate').click(function(event) {
    event.preventDefault();

    var price = $('#wolf input[name="plan--price"]:checked').val();
    var schedule = $('#wolf input[name="plan--schedule"]:checked').val();
    schedule = parseInt(schedule);
    var total = price * schedule;
    console.log('price ' + price + ' sched ' + schedule);

    $('#wolf .plan--cost p').html('Total cost: £' + total);
});



// Chatterbox Calculator

// Define variables

var price = 0;
var mins = 0;
var schedule = 0;
var months = 0;
var total = 0;

$('#chatterbox--calculate').click(function(event) {
    event.preventDefault();

    var price = $('#chatterbox input[name="plan--price"]:checked').val();
    var mins = $('#chatterbox input[name="plan--mins"]:checked').val();
    var schedule = $('#chatterbox input[name="plan--schedule"]:checked').val();
    schedule = parseInt(schedule);
    var total = price * schedule;
    console.log('price ' + price + ' sched ' + schedule);

    $('#chatterbox .plan--cost p').html('Total cost: £' + total);
});

// Family calculator

// var one-gb = ["14.00", "21.20", "28.40", "35.60", "42.80"];
// var ten-gb = ["20.00", "32.00", "44.00", "56.00", "68.00"];
// var twenty-gb = ["30.00", "50.00", "70.00", "90.00", "110.00"];
// var forty-gb = ["40.00", "68.00", "96.00", "124.00", "152.00"];

var one-gb = 0;
var ten-gb = 0;
var twenty-gb = 0;
var forty-gb = 0;

var total = 0;
var schedule = 0;

$("#family-gb").show();
$("#family-sims").hide();

$('#family input[name="plan--price"]:checked').click(function(event) {
  var chosen-gb = this.getAttribute('#family input[name="plan--price"]:checked');

      if ( chosen-gb == one-gb ) {
      $("#family-one-gb").show();
      var chosen-sim = $('#family-one-gb input[id="plan--sim"]:checked').val();

      return schedule;

    } else if  ( chosen-gb == ten-gb ) {
      $("#family-ten-gb").show();
      var chosen-sim = $('#family-ten-gb input[id="plan--sim"]:checked').val();

      return schedule;

    } else if  ( chosen-gb == twenty-gb ) {
      $("#family-twenty-gb").show();
      var chosen-sim = $('#family-twenty-gb input[id="plan--sim"]:checked').val();

      return schedule;

    } else if  ( chosen-gb == forty-gb ) {
      $("#family-forty-gb").show();
      var chosen-sim = $('#family-forty-gb input[id="plan--sim"]:checked').val();

      return schedule;

    } else {
      // Do nothing
    }
  })

  function schedule() {
    var schedule = $('#family input[name="plan--schedule"]:checked').val();
    schedule = parseInt(schedule);
    var total = chosen-sim * schedule;
    console.log('chosen-gb ' + price + ' sched ' + schedule);

    $('#family .plan--cost p').html('Total cost: £' + total);
  }
