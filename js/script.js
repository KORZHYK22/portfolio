const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
	// window.onscroll = () => {
	// 	window.scroll(0, 0);
	// };
});

closeMenu.addEventListener("click", () => {
	menu.classList.remove("active");
	window.onscroll = null;
});

// menu.addEventListener("click", function (e) {
// 	if (!e.target.closest(".menu__block")) {
// 		menu.classList.remove("active");
// 		window.onscroll = null;
// 	}
// });

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
