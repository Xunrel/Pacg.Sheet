define(function () {
	var cardName = '';
	
	var init = function (cardName) {
		this.cardName = cardName;
	};
	
	var Card = {
		name: cardName,
		init: init
	};
	
	return Card;
});