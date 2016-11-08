
(function(){
	var rout = angular.module("app");
	rout.config(function($routeProvider) {
    $routeProvider
    	.when('/about', {
			templateUrl : 'app/views/about.html',
			//template:"<h1>this is about page</h1>"

		}).when('/contacts', {
			templateUrl : 'app/views/contacts.html',
			//template:"<h1>this is about page</h1>"

		}).otherwise({
			redirectTo : '/home'
		});

});

})();