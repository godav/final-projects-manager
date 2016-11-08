(function(){
	var rout = angular.module("app");
	
	rout.controller("contacts", contacts)

	function contacts($scope,$http) {
	$scope.title = "contacts page";
	
	}
	
})();
