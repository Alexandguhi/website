const hamb = document.querySelector("#hamb");
const popup1 = document.querySelector("#popup1");
const menu1 = document.querySelector("#menu1").cloneNode(1);
/*скрол прокрутку отменить при открытом меню*/const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
	e.preventDefault();
	popup1.classList.toggle("open");
	/*для кнопки меню*/hamb.classList.toggle("active");
	/*скрол прокрутку отменить при открытом меню*/body.classList.toggle("noscroll")
	renderPopup1();
}

function renderPopup1() {
	popup1.appendChild(menu1);
}




const namb3 = document.querySelector("#hamb3");
const popup3 = document.querySelector("#popup3");
const catalog = document.querySelector("#catalog").cloneNode(1);

hamb3.addEventListener("click", hambHandler3);

function hambHandler3(e) {
	e.preventDefault();
	popup3.classList.toggle("open");
	hamb3.classList.toggle("active");
	/*скрол прокрутку отменить при открытом меню*/body.classList.toggle("noscroll")
	renderPopup3();
	renderPopup3();
}

function renderPopup3() {
	popup3.appendChild(catalog);
}