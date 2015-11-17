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
			knockout: '../bower_components/knockout/dist/knockout',
		}
	});
	
	require(["jquery", "pacg"], function ($, pacg) {
		console.log("jQuery Version: " + $.fn.jquery);
		pacg.init();
	});
})(requirejs);