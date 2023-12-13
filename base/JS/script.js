let formOne = document.forms[0];
let textInput = formOne.text;
let showInput = formOne.show;
let moveInput = formOne.move;

textInput.addEventListener(`focus`, () => {
	textInput.style.boxShadow = `#B7D5F4 0 0 0.3vw 0.3vw`;
	moveInput.style.boxShadow = `none`;
})

moveInput.addEventListener('click', () => {
	moveInput.style.boxShadow = `#28A743 0 0 0.2vw 0.2vw`;

	textInput.value === ''
		? showInput.value = showInput.value

		:	showInput.value = textInput.value;
	textInput.value = '';
});

moveInput.addEventListener(`blur`, () => {
	moveInput.style.boxShadow = `none`;
})

textInput.addEventListener(`blur`, () => {
	textInput.style.boxShadow = `none`;
})


let formTwo = document.forms["formTwo"];
let placeInput = formTwo.place;

placeInput.addEventListener(`focus`, () => {
	placeInput.style.boxShadow = `#B7D5F4 0 0 0.3vw 0.3vw`;
})

placeInput.addEventListener(`blur`, () => {
	placeInput.placeholder = placeInput.value;
	placeInput.value = ``;
	placeInput.style.boxShadow = `none`;
})
