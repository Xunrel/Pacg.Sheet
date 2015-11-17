(function (requirejs) {
	requirejs.config({
		baseUrl: 'app',
		shim: {
			bootstrap: {
				deps: ['jquery']
			}
		},
		paths: {
			jquery: '../bower_components/jquery/dist/jquery.min',
			bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
			ko: '../bower_components/knockout/dist/knockout',
		}
	});
	
	require(["jquery", "pacg", 'ko'], function ($, pacg, ko) {
		console.log("jQuery Version: " + $.fn.jquery);
		pacg.init();
		window.pacg = pacg;
		ko.applyBindings(pacg);
	});
})(requirejs);