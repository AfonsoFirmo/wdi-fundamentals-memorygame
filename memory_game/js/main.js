


const cards = ["queen","queen","king","king"];
const cardsInPlay =[];


var cardOne= cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped a " + cardsInPlay);

var cardTwo= cards[2];

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	console.log("User flipped two cards")
}
var cardThree="king";
var cardFour="king";