
(function(){
	var rout = angular.module('app', ['ngRoute','ngStorage','angularValidator','ui.bootstrap','wu.masonry'])
	
       .run(function($rootScope) {
            $rootScope.search_query = "";
        });



})();


