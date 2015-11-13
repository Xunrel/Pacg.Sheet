// (function () {
// 	var Pacg = {
// 		name: "PACG Sheet"
// 	};
// 	Pacg.prototype = {
// 		constructor: Pacg
// 	};
// 	
// 	return Pacg;
// })();
define(["jquery"],
	function ($) {
		var appName = 'PACG Sheet';
		var version = '0.0.1';
		
		var init = function () {
			$(document).ready(function () {
				// console.log(Pacg.name + " Version: " + Pacg.version);
				$('[data-pacg="title"]').text(appName);
				$('[data-pacg="version"]').text("Version: " + version);
			});
		};
		
		var Pacg = {
			name: appName,
			version: version,
			init: init
		};
		
		return Pacg;
	}
);