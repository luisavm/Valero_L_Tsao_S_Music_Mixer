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
				beat1.classList.add("thisPlaying")
				});
			beat2.addEventListener("dragend", function() {
				document.getElementById("beat2A").play();
				beat2.classList.add("thisPlaying")
				});
			beat3.addEventListener("dragend", function() {
				document.getElementById("beat3A").play();
				beat3.classList.add("thisPlaying")
				});
			melody1.addEventListener("dragend", function() {
				document.getElementById("melody1A").play();
				melody1.classList.add("thisPlaying");
				});
			melody2.addEventListener("dragend", function() {
				document.getElementById("melody2A").play();
				melody2.classList.add("thisPlaying");
				});
			melody3.addEventListener("dragend", function() {
				document.getElementById("melody3A").play();
				melody3.classList.add("thisPlaying");
				});
			effect1.addEventListener("dragend", function() {
				document.getElementById("effect1A").play();
				effect1.classList.add("thisPlaying");
				});
			effect2.addEventListener("dragend", function() {
				document.getElementById("effect2A").play();
				effect2.classList.add("thisPlaying");
				});
			effect3.addEventListener("dragend", function() {
				document.getElementById("effect3A").play();
				effect3.classList.add("thisPlaying");
				});
			voice1.addEventListener("dragend", function() {
				document.getElementById("voice1A").play();
				voice1.classList.add("thisPlaying");
				});
			voice2.addEventListener("dragend", function() {
				document.getElementById("voice2A").play();
				voice2.classList.add("thisPlaying");
				});
			voice3.addEventListener("dragend", function() {
				document.getElementById("voice3A").play();
				voice3.classList.add("thisPlaying");
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
			
	let stopHeartbeat = document.getElementsByClassName("p1");

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
		
		if (beat1.classList.contains("thisPlaying")) {
			beat1.classList.remove("thisPlaying");
		}
		if (beat2.classList.contains("thisPlaying")) {
			beat2.classList.remove("thisPlaying");
		}
		if (beat3.classList.contains("thisPlaying")) {
			beat3.classList.remove("thisPlaying");
		}
		if (melody1.classList.contains("thisPlaying")) {
			melody1.classList.remove("thisPlaying");
		}
		if (melody2.classList.contains("thisPlaying")) {
			melody2.classList.remove("thisPlaying");
		}
		if (melody3.classList.contains("thisPlaying")) {
			melody3.classList.remove("thisPlaying");
		}
		if (effect1.classList.contains("thisPlaying")) {
			effect1.classList.remove("thisPlaying");
		}
		if (effect2.classList.contains("thisPlaying")) {
			effect2.classList.remove("thisPlaying");
		}
		if (effect3.classList.contains("thisPlaying")) {
			effect3.classList.remove("thisPlaying");
		}
		if (voice1.classList.contains("thisPlaying")) {
			voice1.classList.remove("thisPlaying");
		}
		if (voice2.classList.contains("thisPlaying")) {
			voice2.classList.remove("thisPlaying");
		}
		if (voice3.classList.contains("thisPlaying")) {
			voice3.classList.remove("thisPlaying");
		}

	}

	let stick = document.querySelector("#stop");
	stick.addEventListener("click", stopPlaying);

})(); 