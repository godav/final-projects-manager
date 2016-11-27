
(function() {

  var rout = angular.module('app');
  rout.controller("login", login);
  
   function login($http,StorageService) {
    var model = this;

    model.message = "";
    model.success = false;
    model.user = {
      email: "",
      password: "",  
    };

    model.submit = function(isValid) {
   
      console.log("isValid:" + isValid);
      if (isValid) {
        model.message = "Submitted " + model.user.username;
        
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
                StorageService.add(data);
                model.infoData = data;
                if (model.infoData.register){
                     model.showLogin = false;
                     model.logedIn = true;
                }else{
                     model.logedIn = false;
                      model.errLogin = true;
                      model.username = "";
                      model.userpassword = ""; 
                     
                      
                }
             })
            .error(function (data, status, header, config) {
                model.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        
        
        
      } else {
        model.message = "There are still invalid fields below";
      }
    };
       
    


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
