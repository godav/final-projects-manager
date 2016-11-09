(function(){
	var rout = angular.module('app');
	
	rout.controller("projects", projects);

	function projects($scope,$http) {
	$scope.title = "projects page";
	
	}
	
})();
