
(function(){
	var rout = angular.module('app', ['ngRoute','ngStorage','angularValidator'])
	
       .run(function($rootScope) {
            $rootScope.search_query = "";
        });


})();


