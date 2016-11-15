(function(){
	var rout = angular.module('app');
	
	rout.controller("login", login)

	function login($scope,$http) {
	$scope.title = "login page";
	
	}
	
})();
