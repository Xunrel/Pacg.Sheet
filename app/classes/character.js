define(["card"],
	function (card) {
		var name = '';
		var cards = [];
		
		var init = function (name, cards) {
			this.name = name;
			this.cards = cards;
		};
		
		var addCard = function (cardName) {
			cards.push(card.init(cardName));
		};
		
		var Character = {
			name: name,
			cards: cards,
			init: init,
			addCard: addCard
		}
		
		return Character;
	}
);