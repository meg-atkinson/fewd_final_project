$(document).ready(function(){

// ###Technical Requirements 

// - Get the first element from an attribute name using ```$.attr()```
	
	// console.log('ready');

	// 	// target fa-bars on click
	// 	$('#hamburger').on('click', function() {
	// 		// slide toggle nav bar
	// 		$('nav').slideToggle();
	// 	});

	// 	//correct wondow resize issue
	// $(window).on('resize', function() {
	// 	if ($(window).width() >= 968 && !$('nav').is(':visible')) {
	// 		$('nav').show();
	// 	} else if ($(window).width() < 968 && $('nav').is(':visible')) {
	// 		$('nav').hide();
	// 	}
	// });







	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.other-header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.other-header').removeClass('header-down').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.other-header').removeClass('header-up').addClass('header-down');
        }
    }
    
    lastScrollTop = st;
	}


//Overlay open and close - javascript

	// // Target hamburger on click

	// $('trigger-overlay').on('click', function () {
	// 	// add id overlay-open to overlay
	// 	$('.overlay').addClass('overlay-open').removeClass('overlay-hidden');
	// });


	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
	
});
