$('document').ready(function() {

	var slides = $('.slide').toArray();
	var timeStops = $('.timeStop').toArray();

	var slideNo = 0;		// holds number of slide to be displayed
	showSlide();
	selectTimeStop();

	deactivateNextBtn();

	var dinasSlideNo = 0;
	var plantlifeSlideNo = 0;
	var firstleafletSlideNo = 0;
	var fireworksPlayed = false;
	var leopardOpeningSlideNo = 0;
	var cubsSlideNo = 0;
	var floodsSlideNo = 0;

	$('#downTimeBtn').click(function(){
		if(slideNo === slides.length) {
			alert("End of slides!");
		} else {
			hideSlide();
			deselectTimeStop();
			slideNo++;
			if(slideNo === 5 && fireworksPlayed === false) {
				startFireworks();
				fireworksPlayed = true;
			};
			showSlide();			
			selectTimeStop();	
		}
	});

	$('#upTimeBtn').click(function(){
		if(slideNo === 0) {
			alert("Start of slides!");
		} else {
			hideSlide();
			deselectTimeStop();
			slideNo--;
			showSlide();		
			selectTimeStop();	
		}
	});

	function hideSlide () {
		$(slides[slideNo]).removeClass('revealedSlide');
		$(slides[slideNo]).addClass('hiddenSlide');
	}
	function showSlide () {
		$(slides[slideNo]).removeClass('hiddenSlide');
		$(slides[slideNo]).addClass('revealedSlide');
		$(slides[slideNo]).children(".revealDiv").addClass('reveal');
	}
	function selectTimeStop () {
		$(timeStops[slideNo]).addClass('selected');
		$(timeStops[slideNo]).ScrollTo();
	}
	function deselectTimeStop () {
		$(timeStops[slideNo]).removeClass('selected');
	}
	function deactivateNextBtn () {
		$('#downTimeBtn').removeClass('')
	}

	function openModal () {
		$('#overlay').removeClass('noOverlay');
		$('#overlay').addClass('activeOverlay');
		$('body').addClass('disableBody');
	}

	function closeModal () {
		$('#overlay').removeClass('activeOverlay');
		$('#overlay').addClass('noOverlay');
		$('body').removeClass('disableBody');
	}

	// Popup link click listeners
	$('#popuplink-chimp').click(function(){
		openModal();
		$('#popup-chimp').removeClass('animated zoomOut activePopup');
		$('#popup-chimp').addClass('animated zoomIn activePopup');
	});
	$('#popuplink-giraffe').click(function(){
		openModal();
		$('#popup-giraffe').removeClass('animated zoomOut activePopup');
		$('#popup-giraffe').addClass('animated zoomIn activePopup');
	});

	$('#popuplink-dinasmap').click(function(){
		openModal();
		$('#popup-dinasmap').removeClass('animated zoomOut activePopup');
		$('#popup-dinasmap').addClass('animated zoomIn activePopup');
	});

	$('#popuplink-dinaspics').click(function(){
		openModal();
		$('#popup-dinaspics').removeClass('animated zoomOut activePopup');
		$('#popup-dinaspics').addClass('animated fadeInDown activePopup');
	});
	$('#dinasGalNextBtn').click(function(){
		$("#popup-dinaspics > div.picGallery > div.gallerySlide").eq(dinasSlideNo).removeClass('activeGalSlide');
		dinasSlideNo++;
		if(dinasSlideNo === $("#popup-dinaspics > div.picGallery > div.gallerySlide").length) {
			dinasSlideNo = 0;
		}
		$("#popup-dinaspics > div.picGallery > div.gallerySlide").eq(dinasSlideNo).addClass('activeGalSlide');
	});
	$('#dinasGalPrevBtn').click(function(){
		$("#popup-dinaspics > div.picGallery > div.gallerySlide").eq(dinasSlideNo).removeClass('activeGalSlide');
		dinasSlideNo--;
		if(dinasSlideNo < 0) {
			dinasSlideNo = $("#popup-dinaspics > div.picGallery > div.gallerySlide").length -1;
		}
		$("#popup-dinaspics > div.picGallery > div.gallerySlide").eq(dinasSlideNo).addClass('activeGalSlide');
	});

	$('#popuplink-plantlifepics').click(function(){
		openModal();
		$('#popup-plantlifepics').removeClass('animated zoomOut activePopup');
		$('#popup-plantlifepics').addClass('animated fadeInDown activePopup');
	});
	$('#plantlifeGalNextBtn').click(function(){
		$("#popup-plantlifepics > div.picGallery > div.gallerySlide").eq(plantlifeSlideNo).removeClass('activeGalSlide');
		plantlifeSlideNo++;
		if(plantlifeSlideNo === $("#popup-plantlifepics > div.picGallery > div.gallerySlide").length) {
			plantlifeSlideNo = 0;
		}
		$("#popup-plantlifepics > div.picGallery > div.gallerySlide").eq(plantlifeSlideNo).addClass('activeGalSlide');
	});
	$('#plantlifeGalPrevBtn').click(function(){
		$("#popup-plantlifepics > div.picGallery > div.gallerySlide").eq(plantlifeSlideNo).removeClass('activeGalSlide');
		plantlifeSlideNo--;
		if(plantlifeSlideNo < 0) {
			plantlifeSlideNo = $("#popup-plantlifepics > div.picGallery > div.gallerySlide").length -1;
		}
		$("#popup-plantlifepics > div.picGallery > div.gallerySlide").eq(plantlifeSlideNo).addClass('activeGalSlide');
	});

	$('#popupLink-firstLeaflet').click(function(){
		openModal();
		$('#popup-firstLeafletPics').removeClass('animated zoomOut activePopup');
		$('#popup-firstLeafletPics').addClass('animated fadeInDown activePopup');
	});
	$('#firstLeafletGalFlipBtn').click(function(){
		$("#popup-firstLeafletPics > div.picGallery > div.gallerySlide").eq(firstleafletSlideNo).removeClass('activeGalSlide');
		firstleafletSlideNo++;
		if(firstleafletSlideNo === $("#popup-firstLeafletPics > div.picGallery > div.gallerySlide").length) {
			firstleafletSlideNo = 0;
		}
		$("#popup-firstLeafletPics > div.picGallery > div.gallerySlide").eq(firstleafletSlideNo).addClass('activeGalSlide');
	});

	$('#popupLink-fruitBats').click(function(){
		openModal();
		$('#popup-fruitBats').removeClass('animated zoomOut activePopup');
		$('#popup-fruitBats').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-phase2clipping').click(function(){
		openModal();
		$('#popup-phase2clipping').removeClass('animated zoomOut activePopup');
		$('#popup-phase2clipping').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-mara').click(function(){
		openModal();
		$('#popup-mara').removeClass('animated zoomOut activePopup');
		$('#popup-mara').addClass('animated fadeInRight activePopup');
	});

	$('#popupLink-golden').click(function(){
		openModal();
		$('#popup-golden').removeClass('animated zoomOut activePopup');
		$('#popup-golden').addClass('animated fadeInRight activePopup');
	});

	$('#popupLink-meerkatBabies').click(function(){
		openModal();
		$('#popup-meerkatBabies').removeClass('animated zoomOut activePopup');
		$('#popup-meerkatBabies').addClass('animated fadeInRight activePopup');
	});

	$('#popupLink-waldrapp').click(function(){
		openModal();
		$('#popup-waldrapp').removeClass('animated zoomOut activePopup');
		$('#popup-waldrapp').addClass('animated fadeInRight activePopup');
	});

	$('#popupLink-pigeon').click(function(){
		openModal();
		$('#popup-pigeon').removeClass('animated zoomOut activePopup');
		$('#popup-pigeon').addClass('animated fadeInRight activePopup');
	});

	$('#popupLink-cafeClipping').click(function(){
		openModal();
		$('#popup-cafeClipping').removeClass('animated zoomOut activePopup');
		$('#popup-cafeClipping').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-fossa').click(function(){
		openModal();
		$('#popup-fossa').removeClass('animated zoomOut activePopup');
		$('#popup-fossa').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-squirrelMonkey').click(function(){
		openModal();
		$('#popup-squirrelMonkey').removeClass('animated zoomOut activePopup');
		$('#popup-squirrelMonkey').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-agouti').click(function(){
		openModal();
		$('#popup-agouti').removeClass('animated zoomOut activePopup');
		$('#popup-agouti').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-ringtail').click(function(){
		openModal();
		$('#popup-ringtail').removeClass('animated zoomOut activePopup');
		$('#popup-ringtail').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-brownLemur').click(function(){
		openModal();
		$('#popup-brownLemur').removeClass('animated zoomOut activePopup');
		$('#popup-brownLemur').addClass('animated zoomIn activePopup');
	});

	$('#popuplink-leopardOpening').click(function(){
		openModal();
		$('#popup-leopardOpening').removeClass('animated zoomOut activePopup');
		$('#popup-leopardOpening').addClass('animated fadeInDown activePopup');
	});
	$('#leopardOpeningGalNextBtn').click(function(){
		$("#popup-leopardOpening > div.picGallery > div.gallerySlide").eq(leopardOpeningSlideNo).removeClass('activeGalSlide');
		leopardOpeningSlideNo++;
		if(leopardOpeningSlideNo === $("#popup-leopardOpening > div.picGallery > div.gallerySlide").length) {
			leopardOpeningSlideNo = 0;
		}
		$("#popup-leopardOpening > div.picGallery > div.gallerySlide").eq(leopardOpeningSlideNo).addClass('activeGalSlide');
	});
	$('#leopardOpeningGalPrevBtn').click(function(){
		$("#popup-leopardOpening > div.picGallery > div.gallerySlide").eq(leopardOpeningSlideNo).removeClass('activeGalSlide');
		leopardOpeningSlideNo--;
		if(leopardOpeningSlideNo < 0) {
			leopardOpeningSlideNo = $("#popup-leopardOpening > div.picGallery > div.gallerySlide").length -1;
		}
		$("#popup-leopardOpening > div.picGallery > div.gallerySlide").eq(leopardOpeningSlideNo).addClass('activeGalSlide');
	});

	$('#popupLink-pavan').click(function(){
		openModal();
		$('#popup-pavan').removeClass('animated zoomOut activePopup');
		$('#popup-pavan').addClass('animated zoomIn activePopup');
	});

	$('#popuplink-cubs').click(function(){
		openModal();
		$('#popup-cubs').removeClass('animated zoomOut activePopup');
		$('#popup-cubs').addClass('animated fadeInDown activePopup');
	});
	$('#cubsGalNextBtn').click(function(){
		$("#popup-cubs > div.picGallery > div.gallerySlide").eq(cubsSlideNo).removeClass('activeGalSlide');
		cubsSlideNo++;
		if(cubsSlideNo === $("#popup-cubs > div.picGallery > div.gallerySlide").length) {
			cubsSlideNo = 0;
		}
		$("#popup-cubs > div.picGallery > div.gallerySlide").eq(cubsSlideNo).addClass('activeGalSlide');
	});
	$('#cubsGalPrevBtn').click(function(){
		$("#popup-cubs > div.picGallery > div.gallerySlide").eq(cubsSlideNo).removeClass('activeGalSlide');
		cubsSlideNo--;
		if(cubsSlideNo < 0) {
			cubsSlideNo = $("#popup-cubs > div.picGallery > div.gallerySlide").length -1;
		}
		$("#popup-cubs > div.picGallery > div.gallerySlide").eq(cubsSlideNo).addClass('activeGalSlide');
	});

	$('#popuplink-floods').click(function(){
		openModal();
		$('#popup-floods').removeClass('animated zoomOut activePopup');
		$('#popup-floods').addClass('animated fadeInDown activePopup');
	});
	$('#floodsGalNextBtn').click(function(){
		$("#popup-floods > div.picGallery > div.gallerySlide").eq(floodsSlideNo).removeClass('activeGalSlide');
		floodsSlideNo++;
		if(floodsSlideNo === $("#popup-floods > div.picGallery > div.gallerySlide").length) {
			floodsSlideNo = 0;
		}
		$("#popup-floods > div.picGallery > div.gallerySlide").eq(floodsSlideNo).addClass('activeGalSlide');
	});
	$('#floodsGalPrevBtn').click(function(){
		$("#popup-floods > div.picGallery > div.gallerySlide").eq(floodsSlideNo).removeClass('activeGalSlide');
		floodsSlideNo--;
		if(floodsSlideNo < 0) {
			floodsSlideNo = $("#popup-floods > div.picGallery > div.gallerySlide").length -1;
		}
		$("#popup-floods > div.picGallery > div.gallerySlide").eq(floodsSlideNo).addClass('activeGalSlide');
	});

	$('#popupLink-kowari').click(function(){
		openModal();
		$('#popup-kowari').removeClass('animated zoomOut activePopup');
		$('#popup-kowari').addClass('animated zoomIn activePopup');
	});

	$('#popupLink-rhea').click(function(){
		openModal();
		$('#popup-rhea').removeClass('animated zoomOut activePopup');
		$('#popup-rhea').addClass('animated zoomIn activePopup');
	});



	// Generic close button listener
	$('.closeBtn').click(function(){
		$(this).parent().removeClass('animated zoomIn fadeInDown fadeInRight activePopup');
		$(this).parent().addClass('animated zoomOut');
		closeModal();
	})

});


