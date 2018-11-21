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

    var price = $('#chatterbox input[name="chatterbox-plan--price"]:checked').val();
    var mins = $('#chatterbox input[name="chatterbox-plan--mins"]:checked').val();
    var schedule = $('#chatterbox input[name="chatterbox-plan--schedule"]:checked').val();
    schedule = parseInt(schedule);
    var total = price * schedule;
    console.log('price ' + price + ' sched ' + schedule);

    $('#chatterbox .chatterbox-plan--cost p').html('Total cost: £' + total);
});
