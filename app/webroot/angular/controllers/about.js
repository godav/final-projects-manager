(function(){
	var rout = angular.module("app");
	
	rout.controller("about", about)

	function about($scope,$http) {
	$scope.title = "about page";
	
	}
	
})();
