


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

const cardsInPlay =[];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("Was it a match? Yes, you found a match!");
	} else {
  alert("Was it a match? Nop, try again.")
  console.log("next card is..");
	}
}

function flipCard(cardId) {
	console.log("User flipped a " + myArray[cardId].rank);
	cardsInPlay.push(myArray[cardId].rank);
	console.log(myArray[cardId].cardImage);
	console.log(myArray[cardId].suit);
	checkForMatch();
	/*if (cardsInPlay.length === 2) {
		console.log('you flipped two cards');
	}*/

	// if (cardOne !== cardTwo){
	// 	console.log('you found a match');
	// 	} else {
	// 		alert('sorry try again');
	// 	}
}

flipCard(2);
flipCard(3);
