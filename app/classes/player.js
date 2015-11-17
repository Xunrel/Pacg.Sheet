define(['classes/character', 'ko'],
	function (Character, ko) {
		return function Player() {
			var self = this;
			self.playerName = ko.observable();
			self.characters = ko.observableArray();
			
			self.addCharacter = function (characterName) {
				var newCharacter = new Character();
				newCharacter.charactername(characterName); 
				this.characters.push(newCharacter);
			};
		}
	}
);