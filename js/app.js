// Use jQuery to complete the following challenges

// Get the value from the text input element and populate the output with the input value
$('input').keyup(function() {
	$('output').text($(this).val());
});
// Style the 'h1' element dynamically when the user hovers over it
var myCssStylings = $("h1").css("backgroundColor");
$('h1').hover(function () {
	$('h1').css('backgroundColor', 'blue');
}, function() {
	$(this).css("background-color", myCssStylings);
});
// When a user clicks the 'hide this card' link in the cards, hide that card.

$('.card button').click(function(){
	$(this).parent().parent().parent().parent().hide(2000);
});

// Change the style of the 'p' elements when you double click them
$('p').dblclick(function(){
	$(this).fadeOut(2000);
});

// Add an element to the 'main' element when the user adds html in an alert box.
$('header nav ul li:nth-child(3)').click(function() {
var userText = prompt("Enter text");
$('main').append('<p>'+userText+'</p>');
});