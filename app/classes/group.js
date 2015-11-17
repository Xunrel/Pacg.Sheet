define(['classes/player', 'classes/ship', 'ko'],
	function (Player, Ship, ko) {
		return function Group() {
			var self = this;
			self.groupName = ko.observable('');
			self.players = ko.observableArray([]);
			self.ships = ko.observableArray([]);
			
			self.addPlayer = function (playerName) {
				var newPlayer = new Player();
				newPlayer.playerName(playerName);
				this.players.push(newPlayer);
			};
			
			self.addShip = function (shipName) {
				var newShip = new Ship();
				newShip.shipName(shipName);
				this.ships(newShip);
			};
		}
	}
);