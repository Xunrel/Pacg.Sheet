define(['ko'], function (ko) {
	return function Ship() {
		var self = this;
		self.shipName = ko.observable();
	}
});