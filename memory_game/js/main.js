


const cards = ["queen","queen","king","king"];
const cardsInPlay =[];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
  console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped a " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
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
