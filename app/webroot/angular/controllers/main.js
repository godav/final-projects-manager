(function(){
	var rout = angular.module('app');
	
	rout.controller('main', main);
        
	function main($scope,$http,StorageService) {
            
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
            
//            $scope.logedIn = false;
            
//           $scope.validateUser = function (email,pass) {
//             $scope.email = email;
//             $scope.password = pass; 
//             console.log($scope.email);
//             console.log($scope.password);
            
//             var loginData = $.param({
//                email: $scope.email,
//                password: $scope.password
//            });
//            
//            var config = {
//                headers : {
//                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
//                }
//            };
//
//            $http.post('json/pages/checklogin', loginData,config)
//             .success(function (data, status, headers, config) {
//                StorageService.add(data);
//                $scope.infoData = data;
//                if ($scope.infoData.register){
//                     $scope.showLogin = false;
//                     $scope.logedIn = true;
//                }else{
//                     $scope.logedIn = false;
//                      $scope.errLogin = true;
//                      $scope.username = "";
//                      $scope.userpassword = ""; 
//                     
//                      
//                }
//             })
//            .error(function (data, status, header, config) {
//                $scope.ResponseDetails = "Data: " + data +
//                    "<hr />status: " + status +
//                    "<hr />headers: " + header +
//                    "<hr />config: " + config;
//            });
             
//             };
//            
             $scope.logOut = function(){
                  StorageService.remove();
                  $scope.infoData = null;
                  $scope.logedIn = false;
             };
        }

})();