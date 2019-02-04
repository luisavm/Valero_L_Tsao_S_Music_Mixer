(() => {
		
	var electronicTracks = document.querySelectorAll(".elecTrack");

	function logMyId() {
		console.log(this.id);
		//debugger;
	}

	electronicTracks.forEach(currenttrack => currenttrack.addEventListener("click", logMyId));
})(); 