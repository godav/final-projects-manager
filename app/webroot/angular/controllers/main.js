(function(){
	var rout = angular.module('app');
	
	rout.controller('main', main);
        
	function main($scope,$http,StorageService,$location) {
            
//              $scope.errLogin = false;
              $scope.infoData=StorageService.get();
              if ($scope.infoData === null)  
                  $scope.logedIn = false;
              else
                  $scope.logedIn = $scope.infoData.register;
                                   
//            $scope.title = "courses page";

            $scope.showLogin = false;
            $scope.toggleLoginModal = function(){
           
                $scope.showLogin = !$scope.showLogin;
            };
            
            $scope.showRegister = false;
            $scope.toggleRegisterModal = function(){
                $scope.showLogin = false;
                $scope.showRegister = !$scope.showRegister;
            };
                      
             $scope.logOut = function(){
                  StorageService.remove();
                  $scope.infoData = null;
                  $scope.logedIn = false;
                  $location.path('partials/search.html');
             };
             
             
        }

})();