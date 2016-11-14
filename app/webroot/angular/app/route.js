
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
        .when('/search', {
			templateUrl : 'partials/search.html'
			//template:"<h1>this is about page</h1>"

		})        
        .otherwise({
			redirectTo : '/search'
		});

});


})();