(function(){
	var rout = angular.module("app");
	
	rout.controller("home", home)

	function home($scope,$http) {
	$scope.title = "home page";
	
	}
	
})();
