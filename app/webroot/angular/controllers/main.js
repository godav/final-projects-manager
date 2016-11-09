(function(){
	var rout = angular.module('app');
	
	rout.controller("main", main);

	function main($scope,$http) {
	$scope.title = "courses page";
        
        $scope.activeWhen = function(value) {
            return value ? 'active' : '';
        };
	
	}
	
})();
