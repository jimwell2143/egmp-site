
(function() {
let hamburger = document.getElementById("hamburger");
let links = document.getElementById("links");
let main = document.querySelector("main");

if (hamburger) {
	hamburger.addEventListener("click", hideLinks); // When hamburger is clicked, the links appear or disappear
	hamburger.addEventListener("click", changeMenuState); // When hamburger is clicked, it changes into menu or x
}

// When one of the links is clicked, the links disappear
let link = document.querySelectorAll("ul#links > *");
for (let i = 0; i < link.length; i++) {
	let allLinks = link[i];
	allLinks.addEventListener("click", hideLinks);
	allLinks.addEventListener("click", removeActive);
}

if (hamburger) {
// When the outer part of the hamburger menu is clicked the links disappear
main.addEventListener("click", hideLinksOnly);
main.addEventListener("click", removeActive);
}

// Function Components
function hideLinks() {
	if (links.classList.contains("hidden")) {
		links.classList.remove("hidden");
	} else {
		links.classList.add("hidden");
	}
}
function hideLinksOnly() {
	if (links.classList.contains("hidden") === false) {
		links.classList.add("hidden");
	}
}
function changeMenuState() {
	let hamburger = document.getElementById("hamburger");

	hamburger.classList.toggle("active");
	var myElement = document.getElementById('main-nav');
	var menu = document.getElementsByClassName('nav-menu')

	// Check if the 'active' class is present on the hamburger icon
	if (hamburger.classList.contains("active") && window.scrollY > 0 == false) {
		myElement.style.backgroundColor = 'white';
		for (var i = 0; i < menu.length; i++) {
			menu[i].style.color = "gray"
		}	
	} 
	if (!hamburger.classList.contains("active") && window.scrollY > 0 == false) {
		myElement.style.backgroundColor = 'transparent';
	} 
	
	if (hamburger.classList.contains("active") && window.scrollY > 0 == true) {
		myElement.style.backgroundColor = 'white';
	} 
	if (!hamburger.classList.contains("active") && window.scrollY > 0 == true) {
		myElement.style.backgroundColor = 'white';
	} 
	
	// else {
	// 	// If 'active' class is not present, set the background color to transparent
	// 	// myElement.style.backgroundColor = 'white';
	// }


	

}
function removeActive() {
	hamburger.classList.remove("active");
}
})();