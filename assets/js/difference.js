$(document).ready(function(){

	$('body').fadeIn('slow');

	$('#mainMenuBtnLink').click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('html').fadeOut('slow', newpage);
	});
	function newpage() {
		window.location = newLocation;
	}

	var difference = {}
	difference.allImageSets = [];
	difference.rightSvg = document.getElementById("rightSvg");
	difference.diffs = 0;
	difference.winModal = document.getElementById("winModal");
	difference.newGameModal = document.getElementById("newGameModal");
	difference.handle = "";
	difference.spanTime = document.getElementById("spanTime");
	difference.caption1 = document.getElementById("caption1");
	difference.caption2 = document.getElementById("caption2");
	difference.newGameBtn = document.getElementById("newGameBtn");
	difference.timer = 0;
	difference.numberOfDiffs = 0;

	difference.start = function() {
		difference.newGameBtn.addEventListener("click", function() {
			difference.winModal.style.display = "none";
			difference.newGameModal.style.display = "block";
		});
		document.getElementById("crownedcrane").addEventListener("click", function() {difference.setUp(difference.crownedcrane)});
		document.getElementById("woodnymph").addEventListener("click", function() {difference.setUp(difference.woodnymph)});
		document.getElementById("cockroaches").addEventListener("click", function() {difference.setUp(difference.cockroaches)});
		document.getElementById("frogs").addEventListener("click", function() {difference.setUp(difference.frogs)});
		difference.newGameModal.style.display = "block";
	}

	difference.setUp = function(obj) {
		var originalImg = document.getElementById("originalImg");
		originalImg.setAttribute("src", "assets/img/difference/" + obj.id + "Original.jpg");
		var editedImg = document.getElementById("editedImg");
		editedImg.setAttribute("src", "assets/img/difference/" + obj.id + "Edited.jpg");
		difference.caption1.textContent = obj.caption1;
		difference.caption2.textContent = obj.caption2;
		difference.numberOfDiffs = obj.diff.length;
		for(var i = 0; i < difference.numberOfDiffs; i++) {
			var cx = obj.diff[i][0];
			var cy = obj.diff[i][1];
			var rx = obj.diff[i][2];
			var ry = obj.diff[i][3];
			var diff = document.getElementById("diff" + i);
			var paw = document.getElementById("paw" + i);
			paw.classList.remove("foundCluePaw");
			diff.setAttribute("cx", cx);
			diff.setAttribute("cy", cy);
			diff.setAttribute("rx", rx);
			diff.setAttribute("ry", ry);
			diff.addEventListener("click", function(obj) {
				this.classList.remove("hidden");
				var pawIcon = document.getElementById("paw" + difference.diffs);
				pawIcon.classList.add("foundCluePaw");
				difference.diffs++;
				if(difference.diffs >= difference.numberOfDiffs) {
					difference.win(obj);
				}
				this.removeEventListener("click", arguments.callee);
			});
		}
		difference.handle = setInterval(function() {
			difference.timer++;
		}, 1000);
		difference.newGameModal.style.display = "none";
	}

	difference.setClickZone = function() {

	}

	difference.clearDown = function(obj) {
		difference.timer = 0;
		for(var i = 0; i < difference.numberOfDiffs; i++) {
			var diff = document.getElementById("diff" + i);
			diff.classList.add("hidden");
	//		diff.removeEventListener("click", function() {});
			var pawIcon = document.getElementById("paw" + i);
			pawIcon.classList.remove("foundCluePaw");
		}
		difference.diffs = 0;
	}

	/*
	difference.setCanvasSizes = function() {
		difference.rightPane = document.getElementById("rightPane");
		difference.rightPane.onload = function() {
			difference.rightSvg.setAttribute("width", rightPane.offsetWidth);
			difference.rightSvg.setAttribute("height", rightPane.offsetHeight);
		}
	} */
	difference.imageSet = function(id) {
		this.id = id;
		difference.allImageSets.push(this);
	};
	difference.win = function(obj) {
		clearInterval(difference.handle);
		var s = "";
		if(difference.timer % 60 === 1) {
			s = " second.";
		} else {
			s = " seconds.";
		}
		if(difference.timer >= 120) {
			difference.spanTime.textContent = Math.floor(difference.timer / 60) + " minutes and " + Math.floor(difference.timer % 60) + s;
		} else if(difference.timer > 60) {
			difference.spanTime.textContent = Math.floor(difference.timer / 60) + " minute and " + Math.floor(difference.timer % 60) + s;
		} else {
			difference.spanTime.textContent = difference.timer + s;
		}
		setTimeout(function() {
			console.log(difference.timer);
			difference.winModal.style.display = "block";
			difference.clearDown(obj);
		}, 1000)
	}


	// center x, center y, width, height
	difference.woodnymph = new difference.imageSet("woodnymph");
		difference.woodnymph.diff = [];
		difference.woodnymph.diff[0] = [77, 74, 20, 20];
		difference.woodnymph.diff[1] = [540, 137, 30, 23];
		difference.woodnymph.diff[2] = [65, 152, 50, 30];
		difference.woodnymph.diff[3] = [327, 242, 24, 24];
		difference.woodnymph.diff[4] = [175, 305, 36, 27];
		difference.woodnymph.diff[5] = [625, 436, 80, 38];
		difference.woodnymph.diff[6] = [60, 495, 55, 65];
		difference.woodnymph.diff[7] = [272, 626, 22, 22];
		difference.woodnymph.diff[8] = [460, 668, 20, 20];
		difference.woodnymph.diff[9] = [725, 700, 30, 46];
		difference.woodnymph.caption1 = "Giant Wood Nymph in the butterfly hall at the Oasis.";
		difference.woodnymph.caption2 = "Giant Wood Nymphs, also known as Paper Kites, can be found across Southeast Asia, Northern Australia and Taiwan.";

	difference.crownedcrane = new difference.imageSet("crownedcrane");
		difference.crownedcrane.diff = [];
		difference.crownedcrane.diff[0] = [487, 52, 26, 20];
		difference.crownedcrane.diff[1] = [295, 243, 34, 23];
		difference.crownedcrane.diff[2] = [577, 305, 33, 20];
		difference.crownedcrane.diff[3] = [152, 340, 23, 30];
		difference.crownedcrane.diff[4] = [470, 373, 32, 34];
		difference.crownedcrane.diff[5] = [278, 412, 45, 32];
		difference.crownedcrane.diff[6] = [105, 494, 22, 24];
		difference.crownedcrane.diff[7] = [710, 520, 38, 34];
		difference.crownedcrane.diff[8] = [67, 635, 28, 26];
		difference.crownedcrane.diff[9] = [670, 708, 45, 45];
		difference.crownedcrane.caption1 = "Grey Crowned Cranes are found in Eastern Africa and are listed as endangered by the IUCN.";
		difference.crownedcrane.caption2 = "These striking animals are the national bird of Uganda - one is even featured on the country's flag!";

	difference.cockroaches = new difference.imageSet("cockroaches");
		difference.cockroaches.diff = [];
		difference.cockroaches.diff[0] = [40, 107, 40, 55];
		difference.cockroaches.diff[1] = [540, 135, 26, 35];
		difference.cockroaches.diff[2] = [210, 170, 30, 60];
		difference.cockroaches.diff[3] = [560, 344, 55, 23];
		difference.cockroaches.diff[5] = [110, 455, 22, 39];
		difference.cockroaches.diff[6] = [415, 490, 45, 70];
		difference.cockroaches.diff[4] = [415, 622, 38, 32];
		difference.cockroaches.diff[7] = [328, 720, 65, 35];
		difference.cockroaches.diff[8] = [65, 640, 55, 68];
		difference.cockroaches.diff[9] = [647, 635, 50, 28];
		difference.cockroaches.caption1 = "Hissing Cockroaches.";
		difference.cockroaches.caption2 = "They hiss!";

	difference.frogs = new difference.imageSet("frogs");
		difference.frogs.diff = [];
		difference.frogs.diff[0] = [685, 105, 60, 90];	// New leaf at topright of background
		difference.frogs.diff[1] = [647, 250, 65, 55];	// Right frog has blue eyes
		difference.frogs.diff[2] = [440, 268, 55, 40];	// Right frog is elongated
		difference.frogs.diff[3] = [275, 312, 80, 35];	// Middle frog has blue back
		difference.frogs.diff[5] = [140, 345, 30, 25];	// Left frog has shorter eye
		difference.frogs.diff[6] = [555, 260, 25, 25];	// Right frog has no ear
		difference.frogs.diff[4] = [355, 368, 30, 30];	// Middle frog has smaller pupil
		difference.frogs.diff[7] = [510, 432, 30, 40];	// Right frog has extra toe
		difference.frogs.diff[8] = [130, 505, 22, 30];	// Left frog has missing toe
		difference.frogs.diff[9] = [75, 590, 45, 35];	// Left frog has moved toe
		difference.frogs.caption1 = "Tree frogs.";
		difference.frogs.caption2 = "Ribbit";

	difference.start();

});

