$(document).ready(function(){

	$('body').fadeIn('slow');

	$('a').click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('html').fadeOut('slow', newpage);
	});

	function newpage() {
		window.location = newLocation;
	}


})

