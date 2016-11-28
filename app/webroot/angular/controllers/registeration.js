
(function() {

  var rout = angular.module('app');
  rout.controller("registration", registration);
   function registration($http) {
    var model = this;

    model.message = "";
    model.success = false;
    model.user = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: ""     
    };

    model.submit = function(isValid) {
      console.log("isValid:" + isValid);
      if (isValid) {
        model.message = "Submitted " + model.user.username;
        
        var registrationData = $.param({
                first_name: model.user.firstname,
                last_name: model.user.lastname,
                email: model.user.email,
                password: model.user.password,
                gender: model.user.gender
            });
            
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/registerUser', registrationData,config)
             .success(function (data, status, headers, config) {
                 if (data)
                {
                        model.success = true;
                        model.message = "הרישום בוצע בהצלחה !";
                }
                    
                    
//                }else{
//                     $scope.logedIn = false;
//                      $scope.errLogin = true;
//                      $scope.username = "";
//                      $scope.userpassword = ""; 
//                     
//                      
//                }
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
    
        model.checkEmail = function() {
   
                var Data = $.param({
                email: model.user.email,
            });
            
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/checkemail', Data,config)
             .success(function (data, status, headers, config) {
                 console.log(data);
//
//                if ($scope.$parent.infoData.register){
//                    model.success =true;
//                    model.message  = "שלום " + $scope.$parent.infoData.fname + " התחברת בהצלחה";
////                     $scope.$parent.showLogin = false;
//                     $scope.$parent.logedIn = true;
//                }else{
//                    model.error = true;
//                     model.message  = "פרטי ההתחברות אינם תקינים!";
//                     $scope.$parent.logedIn = false;
//             
//                       $scope.$parent.username = "";
//                       $scope.$parent.userpassword = ""; 
                     
                      
                })
             
            .error(function (data, status, header, config) {
                model.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        
        
        
      }; 
      
    model.passwordValidator = function(password) {
		if (!password) {
			return;
		}
		else if (password.length < 6) {
			return "הסיסמא חייבת להכיל לפחות " + 6 + " תוים";
		}
		else if (!password.match(/[A-Z]/)) {
			return "הסיסמא חייבת להכיל לפחות אות אנגלית גדולה אחת";
		}
		else if (!password.match(/[0-9]/)) {
			return "הסיסמא חייבת להכיל לפחות ספרה אחת";
		}

		return true;
	};
    
    
    model.resetForm = function() {
      model.message = "";
      model.user = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""     
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