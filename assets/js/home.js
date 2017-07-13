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

	var carouselImages = ["Bird", "Butterfly", "Crane", "Dragon", "Flowers", "Frog", "Insect", "Leopards", "Mara", "Meerkats", "Millipede", "Plant", "Python", "Shrew", "Squirrel", "Toad"];
	shuffle(carouselImages);

	for (var i = 0; i < carouselImages.length; i++) {
		var img = $('<img />', { 
			class: 'galleryImg',
			src: 'assets/img/home/Carousel_' + carouselImages[i] + '.jpg',
		});
		img.appendTo($('.rightDiv'));
	}

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}

});