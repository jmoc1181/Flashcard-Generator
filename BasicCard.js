var inquirer = require("inquirer");
module.exports = BasicCard;
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}


var card1 = new BasicCard("The speed of light is how many million miles per hour?", "671");
var card2 = new BasicCard("How much time does sun rays take to reach earth?", "8 minutes");
var card3 = new BasicCard("What is the distance between sun and earth?", "92 million miles");
var card4 = new BasicCard("Which Planet Has the Most Moons with 66?", "jupiter");
var card5 = new BasicCard("How many stars are in the Milky Way?", "over 100 billion");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);


function studyCards() {
	//recursion loop 
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						//increase card count per loop
						cardCount ++
						//continue recursion 
						studyCards();
					} 
					else {
						//state back of card
						console.log("nope");
						console.log("The back actually reads:  " + cards[cardCount].back);
						//increase card count per loop
						cardCount ++
						//continue recursion
						studyCards();
					}

				});

		}


}

studyCards();