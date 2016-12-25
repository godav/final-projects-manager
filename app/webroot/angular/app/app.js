
(function(){
	var rout = angular.module('app', ['ngRoute','ngStorage','angularValidator','ui.bootstrap'])
	
       .run(function($rootScope) {
            $rootScope.search_query = "";
        });



})();


