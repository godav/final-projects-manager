(function(){
	var rout = angular.module('app');
	
	rout.controller('main', main);
        
	function main($scope,$http) {
            $scope.title = "courses page";

            $scope.showLogin = false;
            $scope.toggleLoginModal = function(){
                $scope.showLogin = !$scope.showLogin;
            };
            
            
           
        }

})();