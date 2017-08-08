var numberofSquares = 6;
var rgbColors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector('#colorDisplay');
var messageForUser = document.querySelector('#messageForUser');
var h1text = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');


initGame();

function initGame(){
	addButtonListeners();
	addSquareListeners();
	resetGame();
}



function addButtonListeners(){
	for(var i=0; i <modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove('selected')
			modeButtons[1].classList.remove('selected')
			this.classList.add('selected')
			this.textContent === 'Easy' ? numberofSquares = 3: numberofSquares = 6;
			resetGame();
		});
	}
}

function addSquareListeners(){
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageForUser.textContent = 'Correct!!';
				changeColors();
				resetButton.textContent = 'Play Again?';

			} else {
				this.style.backgroundColor = '#232323'
				messageForUser.textContent = 'Try again :(';
			}
		});

	}
}


function resetGame(){
	
		rgbColors = generateRandomColors(numberofSquares);
			pickedColor = pickColor();
			colorDisplay.textContent = pickedColor;
			for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = rgbColors[i];
			if(rgbColors[i]){
			squares[i].style.backgroundColor = rgbColors[i];
			squares[i].style.display = 'block';
		}
			else{
				squares[i].style.display = 'none';
			}
		}
		messageForUser.textContent = '';
}

resetButton.addEventListener('click', function(){
	resetGame();
});


function changeColors() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
		h1text.style.backgroundColor = pickedColor;
	}


}

function pickColor() {
	var randomNumber = Math.floor(Math.random()*rgbColors.length);
	return rgbColors[randomNumber];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i=0; i < num; i++){
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return  "rgb(" + r + ', ' + g + ', ' + b + ')';
}

