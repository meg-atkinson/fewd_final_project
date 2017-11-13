$(document).ready(function(){

// ###Technical Requirements 

// - Get the first element from an attribute name using ```$.attr()```
	
	console.log('ready');

		// target fa-bars on click
		$('#hamburger').on('click', function() {
			// slide toggle nav bar
			$('nav').slideToggle();
		});

		//correct wondow resize issue
	$(window).on('resize', function() {
		if ($(window).width() >= 968 && !$('nav').is(':visible')) {
			$('nav').show();
		} else if ($(window).width() < 968 && $('nav').is(':visible')) {
			$('nav').hide();
		}
	});
});
