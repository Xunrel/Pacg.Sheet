define(function () {
	var shipName = '';
	
	var init = function (shipName) {
		this.shipName = shipName;
	}
	
	var Ship = {
		name: shipName,
		init: init
	};
	
	return Ship;
});