(() => {
	let dropZone = document.querySelector(".record"),
		tracks = document.querySelectorAll(".elecTrack"),
		beat = document.querySelectorAll(".beat"),
		melody = document.querySelectorAll(".melody"),
		effect = document.querySelectorAll(".effect"),
		voice = document.querySelectorAll(".voice"),
		aud = document.querySelectorAll(".audios");	

	function logMyId() {
		console.log(this.id);  
		//debugger;
	}

	tracks.forEach(currenttrack => currenttrack.addEventListener("click", logMyId));

	let beat1 = document.querySelector("#beat1"),
		beat2 = document.querySelector("#beat2"),
		beat3 = document.querySelector("#beat3"),
		melody1 = document.querySelector("#melody1"),
		melody2 = document.querySelector("#melody2"),
		melody3 = document.querySelector("#melody3"),
		effect1 = document.querySelector("#effect1"),
		effect2 = document.querySelector("#effect2"),
		effect3 = document.querySelector("#effect3"),
		voice1 = document.querySelector("#voice1"),
		voice2 = document.querySelector("#voice2"),
		voice3 = document.querySelector("#voice3");

	function initDrag(){

			beat1.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			beat2.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			beat3.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			melody1.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			melody2.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			melody3.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			effect1.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			effect2.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			effect3.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			voice1.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			voice2.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});
			voice3.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text", this.id);
				});


	}


	dropZone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});   

	dropZone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped sumpin on me."); 
			// debugger;

			beat1.addEventListener("dragend", function() {
				document.getElementById("beat1A").play();
				});
			beat2.addEventListener("dragend", function() {
				document.getElementById("beat2A").play();
				});
			beat3.addEventListener("dragend", function() {
				document.getElementById("beat3A").play();
				});
			melody1.addEventListener("dragend", function() {
				document.getElementById("melody1A").play();
				});
			melody2.addEventListener("dragend", function() {
				document.getElementById("melody2A").play();
				});
			melody3.addEventListener("dragend", function() {
				document.getElementById("melody3A").play();
				});
			effect1.addEventListener("dragend", function() {
				document.getElementById("effect1A").play();
				});
			effect2.addEventListener("dragend", function() {
				document.getElementById("effect2A").play();
				});
			effect3.addEventListener("dragend", function() {
				document.getElementById("effect3A").play();
				});
			voice1.addEventListener("dragend", function() {
				document.getElementById("voice1A").play();
				});
			voice2.addEventListener("dragend", function() {
				document.getElementById("voice2A").play();
				});
			voice3.addEventListener("dragend", function() {
				document.getElementById("voice3A").play();
				});
			
			let hovered = document.querySelector(".overlay");
			hovered.classList.add("hovered");

			let dropZone = document.querySelector(".record");
			dropZone.classList.add("recordplay");

			let tuningStick = document.querySelector(".tuneStick");
			tuningStick.classList.add("stickrotate");

			document.querySelectorAll(".bar").forEach(bar => {
				bar.classList.add("playing");
			});

		});

	initDrag();
	 // melody.play(); voice.play(); effect.play();
			
	

	function stopPlaying() {

		aud.forEach(au => {
			au.pause();
		});
		let hovered = document.querySelector(".overlay");
       		hovered.classList.remove("hovered");
        let dropZone = document.querySelector(".record");
			dropZone.classList.remove("recordplay");
		let tuningStick = document.querySelector(".tuneStick");
			tuningStick.classList.remove("stickrotate");
		document.querySelectorAll(".bar").forEach(bar => {
			bar.classList.remove("playing");
		});

	}

	let stick = document.querySelector("#stop");
	stick.addEventListener("click", stopPlaying);

})(); 