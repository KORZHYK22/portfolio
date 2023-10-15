const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
	document.body.classList.toggle("_lock");
});

closeMenu.addEventListener("click", () => {
	menu.classList.remove("active");
	document.body.classList.remove("_lock");
});

menu.addEventListener("click", function (e) {
	if (!e.target.closest(".menu__block")) {
		menu.classList.remove("active");
		document.body.classList.remove("_lock");
	}
});
const menuLinks = document.querySelectorAll(".menu__a[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(event) {
		const menuLink = event.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.scrollIntoView({ block: "start", inline: "center" });

			if (menu.classList.contains("active")) {
				document.body.classList.remove("_lock");
				menu.classList.remove("active");
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			event.preventDefault();
		}
	}
}

const cookieBox = document.querySelector(".cookies__wrapper"),
	acceptBtn = cookieBox.querySelector(".cookies_item");

acceptBtn.onclick = () => {
	//setting cookie for 1 month, after one month it'll be expired automatically
	document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
	if (document.cookie) {
		//if cookie is set
		cookieBox.classList.add("hide"); //hide cookie box
	} else {
		//if cookie not set then alert an error
		alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
	}
};
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
