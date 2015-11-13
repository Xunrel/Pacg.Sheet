define(['classes/player', 'classes/ship'],
	function (player, ship) {
		var groupName = ''
		var players = [];
		var ships = [];
		
		var init = function (groupName, players, ships) {
			this.groupName = groupName;
			this.players = players;
			this.ships = ships;
		};
		
		var addPlayer = function (playerName) {
			this.players.push(player.init(playerName, []));
		};
		
		var addShip = function (shipName) {
			this.ships(ship.init(shipName));
		};
		
		var Group = {
			name: groupName,
			players: players,
			ships: ships,
			init: init,
			addPlayer: addPlayer,
			addShip: addShip
		}
		
		return Group;
	}
);