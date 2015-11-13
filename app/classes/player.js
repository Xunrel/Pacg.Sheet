define(['classes/character'],
	function (character) {
		var playerName = '';
		var characters = [];
		
		var init = function (playerName, characters) {
			this.playerName = playerName;
			this.characters = characters;
		};
		
		var addCharacter = function (characterName) {
			this.characters.push(character.init(characterName));
		};
		
		var Player = {
			name: playerName,
			characters: characters,
			init: init,
			addCharacter: addCharacter
		};
		
		return Player;
	}
);