var inquirer = require("inquirer");
module.exports = ClozeCard;
var cards = [];
var cardCount = 0;
var clozeText


function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

}

ClozeCard.prototype.full = function() {
	//show sentence with a blank
	clozeDeleted = this.cloze;
	clozeText = this.text;

	//replace the incomplete sentence with the answer (cloze)
	clozeText = clozeText.replace("...", clozeDeleted);

	//show answer
	console.log(clozeText);

}


var card1 = new ClozeCard("The speed of light is ... million miles per hour", "671");
var card2 = new ClozeCard("It takes ... minutes for the sun rays to reach earth", "8");
var card3 = new ClozeCard("The distance between sun and earth is ... million miles", "92");
var card4 = new ClozeCard("The planet with the most moons with is ...", "jupiter");
var card5 = new ClozeCard("There are ... billion stars in the Milky Way", "100");


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
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					//if user's answer matches the cloze answer, log Correct, loop back through studyCards.
					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						//increase card count per loop
						cardCount ++
						//continue recursion 
						studyCards();
					} 
					else {
						//if user's answer does not match cloze answer, log Incorrect and show the full sentence.  
						console.log("nope");
						cards[cardCount].full();
						//increase card count per loop
						cardCount ++
						//continue recursion
						studyCards();
					}

				});

		}


}

studyCards();