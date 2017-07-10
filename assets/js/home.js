$(document).ready(function(){

	$('body').fadeIn('slow');

//	var newLocation;

	$('a').click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('html').fadeOut('slow', newpage);
	});

	function newpage() {
		window.location = newLocation;
	}


})

