(function(){
	var rout = angular.module('app');
	
	rout.controller('main', main);
        
	function main($scope,$http) {
            $scope.title = "courses page";

            $scope.showLogin = false;
            $scope.toggleLoginModal = function(){
           
                $scope.showLogin = !$scope.showLogin;
            };
            
            $scope.showRegister = false;
            $scope.toggleRegisterModal = function(){
                $scope.showLogin = false;
                $scope.showRegister = !$scope.showRegister;
            };
            
            $scope.logedIn = false;
            
           $scope.validateUser = function (email,pass) {
             $scope.email = email;
             $scope.password = pass; 
             
             var Indata = {email:$scope.email,password:$scope.password}
            $http({
            url: "time.php",
            method: "POST",
            params: Indata
            })
             .success(function(response) {
                 alert("success") 
                })
             .error(function() { alert("fail") });
             
             

             };
//            
    
        }

})();