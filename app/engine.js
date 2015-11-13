define(['classes/group'],
	function (group) {
		var groups = [];
		
		var init = function () {
			console.log('Initializing application...');
		};
		
		var addGroup = function (groupName) {
			this.groups.push(group.init(groupName, []));
		}
		
		var Engine = {
			groups: groups,
			init: init,
			addGroup: addGroup
		};
		
		return Engine;
	}
);