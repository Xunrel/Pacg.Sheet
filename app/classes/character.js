define(['classes/card'],
	function (card) {
		var characterName = '';
		var cards = [];
		
		var init = function (characterName, cards) {
			this.characterName = characterName;
			this.cards = cards;
		};
		
		var addCard = function (cardName) {
			this.cards.push(card.init(cardName));
		};
		
		var Character = {
			name: characterName,
			cards: cards,
			init: init,
			addCard: addCard
		};
		
		return Character;
	}
);