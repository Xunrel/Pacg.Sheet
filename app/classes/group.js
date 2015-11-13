define(['classes/player'],
	function (player) {
		var groupName = ''
		var players = [];
		
		var init = function (groupName, players) {
			this.groupName = groupName;
			this.players = players;
		};
		
		var addPlayer = function (playerName) {
			this.players.push(player.init(playerName, []));
		};
		
		var Group = {
			name: groupName,
			players: players,
			init: init,
			addPlayer: addPlayer
		}
		
		return Group;
	}
);