(() => {
		
	let electronicTracks = document.querySelectorAll(".elecTrack");

	function logMyId() {
		console.log(this.id);
		//debugger;
	}

	electronicTracks.forEach(currenttrack => currenttrack.addEventListener("click", logMyId));

	let dropZone = document.querySelector(".record"),
		tracks = document.querySelectorAll(".elecTrack");

	function initDrag(){
		tracks.forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("images/svg", this.id);
			});
		});
	}

	dropZone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});   

	dropZone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped sumpin on me."); 
			
			let hovered = document.querySelector(".overlay");
			hovered.classList.add("hovered");

			let dropZone = document.querySelector(".record");
			dropZone.classList.add("recordplay");

			let tuningStick = document.querySelector(".tuneStick");
			tuningStick.classList.add("stickrotate");

			document.querySelector("audio").play();

			document.querySelectorAll(".bar").forEach(bar => {
				bar.classList.add("playing");
			})
			


		});


	initDrag();

	function stopPlaying() {

		document.querySelector("audio").pause(true);
		let hovered = document.querySelector(".overlay");
       		hovered.classList.remove("hovered");
        let dropZone = document.querySelector(".record");
			dropZone.classList.remove("recordplay");
		let tuningStick = document.querySelector(".tuneStick");
			tuningStick.classList.remove("stickrotate");
		document.querySelectorAll(".bar").forEach(bar => {
			bar.classList.remove("playing");
		})

	}

	let stick = document.querySelector("#stop");
	stick.addEventListener("click", stopPlaying);

	stopPlaying();

})(); 