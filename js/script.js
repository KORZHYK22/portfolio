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

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	form.addEventListener("submit", formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add("_sending");
			let response = await fetch("sendmail.php", {
				method: "POST",
				body: formData,
			});
			if (response.ok) {
				alert("Message has been sent");
				form.reset();
				form.classList.remove("_sending");
			} else {
				alert("Error");
				form.classList.remove("_sending");
			}
		} else {
			alert("Please fill the required field");
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req");

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains("_email")) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === "") {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add("_error");
		input.classList.add("_error");
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove("_error");
		input.classList.remove("_error");
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});
