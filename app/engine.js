define(['classes/Group', 'ko'],
	function (Group, ko) {
		var groups = ko.observableArray([]);
		
		var addGroup = function (groupName) {
			var newGroup = new Group();
			newGroup.groupName(groupName);
			this.groups.push(newGroup);
		}
		
		var Engine = {
			groups: groups,
			addGroup: addGroup
		};
		
		return Engine;
	}
);