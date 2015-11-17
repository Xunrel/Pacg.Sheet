define(['classes/card', 'ko'],
	function (Card, ko) {
		return function Character() {
			var self = this;
			self.characterName = ko.observable();
			self.cards = ko.observableArray();

			self.addCard = function (cardName) {
				var newCard = new Card();
				newCard.cardName(cardName);
				this.cards.push(newCard);
			};
		};
	}
);