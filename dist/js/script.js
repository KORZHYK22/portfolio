const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
	menu.classList.remove("active");
});

menu.addEventListener("click", function (e) {
	if (!e.target.closest(".menu__block")) {
		menu.classList.remove("active");
	}
});
