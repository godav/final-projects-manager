(function(){
	var rout = angular.module('app');
	
	rout.controller('main', main);
        
	function main($scope,$rootScope,StorageService,$location) {
            
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
             
            $scope.showAddPhoto = false;
             $scope.toggleAddPhotoModal = function(){     
                 $scope.showAddPhoto = !$scope.showAddPhoto;
             }; 
             
              $scope.showUpdatePhoto = false;
             $scope.toggleUpdatePhotoModal = function(){     
                 $scope.showUpdatePhoto = !$scope.showUpdatePhoto;
             }; 
             
             //used to know when photo add modal was submitted to update gallery
//             $scope.updated = false;
//             
//             $scope.$watch("updated", function (newValue, oldValue) {
//                if ($scope.updated)
//                {
//                     $rootScope.$broadcast('galleryUpdated');
//                }
//        });
        }

})();