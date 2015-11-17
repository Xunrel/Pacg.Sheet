define(['ko'], function (ko) {
	return function Card() {
		var self = this;
		self.cardName = ko.observable();
	}
});