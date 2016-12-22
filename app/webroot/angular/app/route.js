
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
			templateUrl : 'partials/search.html',
                        controller : "search"
			//template:"<h1>this is about page</h1>"

		})
        .when('/dashboard', {
			templateUrl : 'partials/dashboard.html'
			//template:"<h1>this is about page</h1>"

	})
        .when('/profile', {
			templateUrl : 'partials/profile.html'
			//template:"<h1>this is about page</h1>"

	})  
        .when('/galery', {
                templateUrl : 'partials/galery.html'
                //template:"<h1>this is about page</h1>"

        })   
         .when('/search_results', {
                templateUrl : 'partials/search_results.html',
                controller : "searchResults"
                //template:"<h1>this is about page</h1>"

        })     
//        .when('/login', {
//			templateUrl : 'partials/login.html'
//			//template:"<h1>this is about page</h1>"
//
//		})     
//         .when('#', {
//		
//
//		})                   
        .otherwise({
			redirectTo : '/search'
		});

});


})();