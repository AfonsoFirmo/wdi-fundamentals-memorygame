

const myArray = [
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
	},
	{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: 'queen',
	suit: 'diamonds',
	cardImage:"images/queen-of-diamonds.png"
	}
	];

function createBoard(){
	for (var i=0; i<myArray.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
}

const cardsInPlay =[];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("Was it a match? Yes, you found a match!");
	} else {
  alert("Was it a match? Nop, try again.")
  console.log("next card is..");
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped a " + myArray[cardId].rank);
	cardsInPlay.push(myArray[cardId].rank);
	console.log(myArray[cardId].cardImage);
	console.log(myArray[cardId].suit);
	this.setAttribute('src', myArray[cardId].cardImage);
	cardsInPlay.push(myArray[cardId].rank);
	if (cardsInPlay.length == 2) {
		if (cardsInPlay[0]===cardsInPlay[1]) {
			alert("Was it a match? Yes, you found a match!");
		} else {
  		alert("Was it a match? Nop, try again.");
		}
	}

	/*if (cardsInPlay.length === 2) {
		console.log('you flipped two cards');
	}*/

	// if (cardOne !== cardTwo){
	// 	console.log('you found a match');
	// 	} else {
	// 		alert('sorry try again');
	// 	}
}

createBoard();
