
(function() {

  var rout = angular.module('app');
  rout.controller("login", login);
  
   function login($http,StorageService,$scope) {
    var model = this;
    console.log("scopeLogin " + $scope.$parent.showLogin);
    
    model.message = "";
    model.error = false;
    model.success = false;
    model.user = {
      email: "",
      password: "" 
    };
    

       
    
    model.submit = function(isValid) {
   
      console.log("isValid:" + isValid);
      if (isValid) {
//        model.message = "Submitted " + model.user.username;
        
                var loginData = $.param({
                email: model.user.email,
                password: model.user.password
            });
            
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/checklogin', loginData,config)
             .success(function (data, status, headers, config) {
                 console.log(data);
                StorageService.add(data);
                $scope.$parent.infoData = data;
                if ($scope.$parent.infoData.register){
                    model.success =true;
                    model.message  = "שלום " + $scope.$parent.infoData.fname + " התחברת בהצלחה";
//                     $scope.$parent.showLogin = false;
                     $scope.$parent.logedIn = true;
                }else{
                    model.error = true;
                     model.message  = "פרטי ההתחברות אינם תקינים!";
                     $scope.$parent.logedIn = false;
//             
//                       $scope.$parent.username = "";
//                       $scope.$parent.userpassword = ""; 
                     
                      
                }
             })
            .error(function (data, status, header, config) {
                model.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        
        
        
      } 
    };
       
    model.close = function(){
        model.message= "";
        model.success = false;
        model.error = false;
    };

    model.clear = function(){
        model.message= "";
        model.error = false;
    };
    
    };



//  var compareTo = function() {
//    return {
//      require: "ngModel",
//      scope: {
//        otherModelValue: "=compareTo"
//      },
//      link: function(scope, element, attributes, ngModel) {
//
//        ngModel.$validators.compareTo = function(modelValue) {
//          return modelValue == scope.otherModelValue;
//        };
//
//        scope.$watch("otherModelValue", function() {
//          ngModel.$validate();
//        });
//      }
//    };
//  };
//
//  app.directive("compareTo", compareTo);


}());
