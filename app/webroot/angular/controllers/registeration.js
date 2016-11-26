
(function() {

  var rout = angular.module('app');
  rout.controller("registration", registration);
   function registration() {
    var model = this;

    model.message = "";

    model.user = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: ""     
    };

    model.submit = function(isValid) {
      console.log("h");
      if (isValid) {
        model.message = "Submitted " + model.user.username;
      } else {
        model.message = "There are still invalid fields below";
      }
    };
    
    model.passwordValidator = function(password) {
                console.log(password);
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