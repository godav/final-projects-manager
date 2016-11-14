(function(){
	var rout = angular.module("app");
	
	rout.controller("search", search);

	function search($scope,$http) {
	$scope.title = "search page";
	
	}
	
})();
