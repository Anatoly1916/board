const board = document.querySelector('#board');
const SQUARES_NUMBER = 600;
const colors = ['#d3201a', '#c1e61e', '#aa15e4ca', '#15a6e4ca', '#2de415f9'];

for (let i = 0; i < SQUARES_NUMBER; i++){
	const square = document.createElement('div');
	square.classList.add('square');
	board.append(square);

	square.addEventListener('mouseover', setColor);

	square.addEventListener('mouseleave', () => {
		removeColor(square);
	})
}

function setColor(event){
	let elem = event.target;
	let color = getRandomColor();
	elem.style.backgroundColor = color;
	elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem){
	elem.style.backgroundColor = '#1d1d1d';
	elem.style.boxShadow = '0 0 2px #000';
}

function getRandomColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}