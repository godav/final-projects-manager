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
           
            $scope.logedIn = false;
            
           $scope.checkUser = function (email) {
             $scope.email = email;
             $scope.password = password; 
             console.log($scope.email);
              console.log($scope.password);
             };
//            var Indata = {param:'val1',.....}
//            $http({
//            url: "time.php",
//            method: "POST",
//            params: Indata
//            })
//             .success(function(response) {
//                 alert("success") 
//                })
//             .error(function() { alert("fail") });
    
        }

})();