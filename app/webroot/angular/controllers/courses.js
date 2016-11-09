(function(){
	var rout = angular.module('app');
	
	rout.controller("courses", courses)

	function courses($scope,$http) {
	$scope.title = "courses page";
	
	}
	
})();
