// what colors I will have
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// 2 targets button to click and text
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
// event listener
btn.addEventListener('click', function () {
	// get random number array indexes 0-3 colors[0], colors[1],colors[2], colors[3]

	const randomNumber = getRandomNumber();
	console.log(randomNumber);


	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
