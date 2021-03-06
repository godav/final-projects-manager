
(function () {

    var rout = angular.module('app');
    rout.controller("registration", registration);
    function registration($http,$scope) {
        var model = this;
            $scope.uniqueEmail = true;
           model.old = null;
            model.returnData = null;
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

        $scope.init = function () {
            model.old = null;
            model.returnData = null;
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
        };




        model.submit = function (isValid) {
//            console.log("isValid:" + isValid);
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
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                    }
                };

                $http.post('json/pages/registerUser', registrationData, config)
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

        model.checkEmail = function (email) {

//            var userEmail = model.user.email;
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if (!email)
                return;

//            if (model.old=== userEmail)
//                return;
//
//             model.old = userEmail;


//            var atpos = email.indexOf("@");
//            var dotpos = email.lastIndexOf(".");
            else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length)
            {

                return 'כתובת הדואר האלקטרוני אינה תיקנית';
            }
            else if (!$scope.uniqueEmail){

//             
                    return 'כתובת הדואר האלקטרוני קיימת במערכת';
            }
//
//                  
//            }

            return true;




        };

        ajaxEmailValidator = function (userEmail)
        {
            console.log(userEmail);

            var emailData = $.param({
                email: userEmail
            });
            console.log(emailData);
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/checkemail', emailData, config)
                    .success(function (newdata, status, headers, config) {
                        console.log(newdata);
                        model.returnData = newdata;
                        oldEmail = userEmail;
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
                        //   return data;

                    });
            console.log(model.returnData);

            if (model.returnData instanceof Array)
                return false;
            else
                return true;

        };

        model.passwordValidator = function (password) {
            if (!password) {
                return;
            } else if (password.length < 6) {
                return "הסיסמא חייבת להכיל לפחות " + 6 + " תוים";
            } else if (!password.match(/[A-Z]/)) {
                return "הסיסמא חייבת להכיל לפחות אות אנגלית גדולה אחת";
            } else if (!password.match(/[0-9]/)) {
                return "הסיסמא חייבת להכיל לפחות ספרה אחת";
            }

            return true;
        };


        model.resetForm = function () {
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

}());