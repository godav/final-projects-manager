
(function(){
	var rout = angular.module("app");
	rout.config(function($routeProvider) {
        $routeProvider
    	.when('/courses', {
			templateUrl : 'partials/courses.html'
			//template:"<h1>this is about page</h1>"

	})
        .when('/projects', {
			templateUrl : 'partials/projects.html'
			//template:"<h1>this is about page</h1>"

		})
        .otherwise({
			redirectTo : 'partials/search.html'
		});

});

})();