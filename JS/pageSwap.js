var currentlyActive = 'home';

function swapPage(page) {
	//Toggles active navbar object and displays corresponding div.
	if (page != currentlyActive) {
		document.getElementById((currentlyActive)).classList.toggle("active");
		document.getElementById((currentlyActive)).classList.toggle("inactive");
		document.getElementById((currentlyActive + "text")).style.display = "none";
		currentlyActive = page;
		document.getElementById((currentlyActive)).classList.toggle("inactive");
		document.getElementById((currentlyActive)).classList.toggle("active");
		document.getElementById((currentlyActive + "text")).style.display = "block";
	}
}