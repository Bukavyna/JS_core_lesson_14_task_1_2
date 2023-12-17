// let formOne = document.forms[0];
// let textInput = formOne.text;
// let showInput = formOne.show;
// let moveInput = formOne.move;
//
// textInput.addEventListener(`focus`, () => {
// 	textInput.style.boxShadow = `#B7D5F4 0 0 0.3vw 0.3vw`;
// 	moveInput.style.boxShadow = `none`;
// })
//
// moveInput.addEventListener('click', () => {
// 	moveInput.style.boxShadow = `#28A743 0 0 0.2vw 0.2vw`;
//
// 	textInput.value === ''
// 		? showInput.value = showInput.value
//
// 		:	showInput.value = textInput.value;
// 	textInput.value = '';
// });
//
// moveInput.addEventListener(`blur`, () => {
// 	moveInput.style.boxShadow = `none`;
// })
//
// textInput.addEventListener(`blur`, () => {
// 	textInput.style.boxShadow = `none`;
// })


// let formTwo = document.forms["formTwo"];
// let placeInput = formTwo.place;
//
// placeInput.addEventListener(`focus`, () => {
// 	placeInput.style.boxShadow = `#B7D5F4 0 0 0.3vw 0.3vw`;
// })
//
// placeInput.addEventListener(`blur`, () => {
// 	placeInput.placeholder = placeInput.value;
// 	placeInput.value = ``;
// 	placeInput.style.boxShadow = `none`;
// })



const form = document.forms["ff"];
let firstName = form.firstName;
let secondName = form.secondName;
let emailName = form.emailName;
let input = document.querySelectorAll(`.text`);

for (let i = 0; i < input.length; i++) {
	input[i].addEventListener(`focus`, () => {
		input[i].style.boxShadow = `#B7D5F4 0 0 0.3vw 0.3vw`;
	})
	input[i].addEventListener(`blur`, () => {
		input[i].style.boxShadow = ``;
	})
}

let butt = form.butt;
let work = form.works;
let container = document.getElementById(`container`);
let containerShow =  document.getElementById(`container-show`);
let check = document.getElementById(`check`);

butt.addEventListener(`click`, () => {
	if (!check.checked) {
		document.getElementById(`check_error`).style.display = `block`;
		return;
	}

	container.style.display = `none`;
	containerShow.style.display = `block`;
	document.getElementById(`firstName-show`).textContent = firstName.value;
	document.getElementById(`secondName-show`).textContent = secondName.value;
	document.getElementById(`emailName-show`).textContent = emailName.value;
	document.getElementById(`work-show`).textContent = work.value;
})

let buttons = document.querySelector(`.button-up-show`);

buttons.addEventListener(`click`, () => {
	document.getElementById(`check_error`).style.display = `none`;
	container.style.display = `block`;
	containerShow.style.display = `none`;
	firstName.value = ``;
	firstName.placeholder = `Ivan`;
	secondName.value = ``;
	secondName.placeholder = `Ivanyshyn`;
	emailName.value = '';
	work.value = `frontend`;
	check.checked = false;
	radMan.checked = true;
})

let radMan = document.getElementById(`rad-man`);
let radWoman = document.getElementById(`rad-woman`);
let imageMan = document.querySelector(`.image-man`);
let imageWoman = document.querySelector(`.image-woman`);

radMan.addEventListener(`click`, () => {
	imageWoman.style.display = `none`;
	imageMan.style.display = `block`;
})

radWoman.addEventListener(`click`, () => {
	imageWoman.style.display = `block`;
	imageMan.style.display = `none`;
})

