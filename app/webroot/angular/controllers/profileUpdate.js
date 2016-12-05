
(function() {

  var rout = angular.module('app');
  rout.controller("profileUpdate", profileUpdate);
   function profileUpdate($http,$scope ) {
    var model = this;
    model.old = null;
    model.returnData=null;
    model.message = "";
    model.success = false;
    model.profilePicture = "";
    model.user = {
      id: "",  
      firstname: "",
      lastname: "",
      email: "",
      git: "",
      gender: "",
      file: "",
      fileUrl: "",
      role:""
    };
    
    $scope.init = function() {
        model.user.id = $scope.$parent.infoData.id;
              var Data = $.param({
                id: $scope.$parent.infoData.id

            });
            
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/getUserProfile', Data,config)
             .success(function (data, status, headers, config) {
                 console.log(data);
                 if (data)
                {    
                    model.user.firstname = data.User.first_name;
                    model.user.lastname = data.User.last_name;
                    model.user.email = data.User.email;
                    model.user.gender = data.User.gender;
                    model.user.git = data.User.git;
                    model.user.role = data.User.role;
                    model.user.fileUrl = "img/files/" + model.user.id + "/";
                    if (!data.User.photo)
                    {   
                        if (model.user.gender==='M')
                            model.profilePicture = 'img/man.png';
                        else 
                            model.profilePicture = 'img/female.png';
                    }
                    else 
                        model.profilePicture = data.User.photo;
                    
//                    model.user.file = data.User.photo;
                    
                    
//                        model.success = true;
//                        model.message = "הרישום בוצע בהצלחה !";
                }

             })
            .error(function (data, status, header, config) {
                model.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            }); 
    };
    
    model.submit = function(isValid) {
      
      if (isValid) {
        model.message = "Submitted " + model.user.username;
        
        var updateData = $.param({
                id: model.user.id,
                first_name: model.user.firstname,
                last_name: model.user.lastname,
                email: model.user.email,
//                password: model.user.password,
                gender: model.user.gender,
                git: model.user.git,
                file: model.user.file
            });
            
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/updateUser', updateData,config)
             .success(function (data, status, headers, config) {
                 console.log(data);
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
    
        model.checkEmail = function(email) {
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if (!email)
               return;

            else if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
            {
             
                return 'כתובת הדואר האלקטרוני אינה תיקנית';
            }

               return true;   
      }; 
//      
//      ajaxEmailValidator = function(userEmail)
//      {
//            console.log(userEmail);
//         
//          var emailData = $.param({
//                email: userEmail
//            });
//            console.log(emailData);
//            var config = {
//                headers : {
//                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
//                }
//            };
//
//             $http.post('json/pages/checkemail', emailData,config)
//             .success(function (data, status, headers, config) {
//                 console.log(data);
//                  model.returnData = data;
////
////                if ($scope.$parent.infoData.register){
////                    model.success =true;
////                    model.message  = "שלום " + $scope.$parent.infoData.fname + " התחברת בהצלחה";
//////                     $scope.$parent.showLogin = false;
////                     $scope.$parent.logedIn = true;
////                }else{
////                    model.error = true;
////                     model.message  = "פרטי ההתחברות אינם תקינים!";
////                     $scope.$parent.logedIn = false;
////             
////                       $scope.$parent.username = "";
////                       $scope.$parent.userpassword = ""; 
//                     
//                      
//                })
//             
//            .error(function (data, status, header, config) {
//                
//                model.ResponseDetails = "Data: " + data +
//                    "<hr />status: " + status +
//                    "<hr />headers: " + header +
//                    "<hr />config: " + config;
//         //   return data;
//            
//            });
//        console.log( model.returnData);
//
//        if (model.returnData instanceof Array )
//            return false;
//        else
//            return true;
//          
//      };
//      
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