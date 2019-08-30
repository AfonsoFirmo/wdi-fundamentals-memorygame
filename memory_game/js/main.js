


const cards = ["queen","queen","king","king"];
const cardsInPlay =[];

var message="";
var cardOne= cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped a " + cardsInPlay[0]);

var cardTwo= cards[2];

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

/*if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}*/

if (cardsInPlay.length === 2) {
	console.log('you flipped two cards');
}

if (cardOne !== cardTwo){
	console.log('you found a match');
	} else {
		alert('sorry try again');
	}
	
console.log(message);
var cardThree="king";
var cardFour="king";