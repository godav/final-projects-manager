
(function() {

  var rout = angular.module('app');
  rout.controller("profileUpdate", profileUpdate);
   function profileUpdate($http,$scope,fileService,$timeout ) {
    var model = this;
//    model.old = null;
//    model.returnData=null;
//    model.message = "";
//    model.success = false;
    
    var defaults = {
 
      firstname: "",
      lastname: "",
      email: "",
      git: "",
      gender: "",
      photoName: "",
      photoLocation: "",

    };
    
    model.changed = false;
    model.profilePicture = "";
    model.user = {
      id: "",  
      firstname: "",
      lastname: "",
      email: "",
      git: "",
      gender: "",
      photoName: "",
      photoLocation: "",
      role:""
    };
    
    {
	
           $scope.uploading = false;
		$scope.result="upload";
//                 console.log('before');
		var uploadFile = function() {
//                    console.log('pressed');
			$scope.uploading=true;
			var url = 'json/pages/pictureUpload';
			var file = $scope.myFile;
                        var folder = 'users\\img\\';
                        var id = $scope.$parent.infoData.id ;

			fileService.uploadFileToUrl(file, url,folder,id,function(response){
                            console.log('response',response);
                            if (response['full']){
                                 model.user.photoName =  response['name'];
                                 model.user.photoLocation =  response['full'];
                            }
                         });
                                
                        
                       
		};
	};
    
    $scope.changeValue = function(fieldname){
    switch (fieldname){
        case 'firstname' : if (model.user.firstname===defaults.firstname)
                                model.changed
                break;
        case 'lastname' : .... break;     
        case 'email' : .... break;
        case 'gender' : .... break;
        case 'git' : .... break;
        case 'photoName' : .... break;
    }
 }
    
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
                 if (data)
                {    
                    model.user.firstname = data.User.first_name;
                    model.user.lastname = data.User.last_name;
                    model.user.email = data.User.email;
                    model.user.gender = data.User.gender;
                    model.user.git = data.User.git;
                    model.user.role = data.User.role;
                    model.user.photoName = data.User.photo_name;
                    model.user.photoLocation = data.User.photo_location;
                    if (!data.User.photo_location)
                    {   
                        if (model.user.gender==='M')
                            model.profilePicture = 'img/man.png';
                        else 
                            model.profilePicture = 'img/female.png';
                    }
                    else 
                        model.profilePicture = model.user.photoLocation;
                    
//                    model.user.file = data.User.photo;
                    defaults.firstname = data.User.first_name;
                    defaults.lastname = data.User.last_name;
                    defaults.email = data.User.email;
                    defaults.gender = data.User.gender;
                    defaults.git = data.User.git;          
                    defaults.photoName = data.User.photo_name;
                  
                    
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
        uploadFile();
        var updateData = $.param({
                id: model.user.id,
                first_name: model.user.firstname,
                last_name: model.user.lastname,
                email: model.user.email,
                gender: model.user.gender,
                git: model.user.git,
                photo_name: model.user.photoName,
                photo_location: model.user.photoLocation
                
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
                        model.message = "הנתונים עודכנו!";
                        if (model.profilePicture !== model.user.photoLocation && model.user.photoLocation!==null)
                              model.profilePicture = model.user.photoLocation;
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

//    model.passwordValidator = function(password) {
//		if (!password) {
//			return;
//		}
//		else if (password.length < 6) {
//			return "הסיסמא חייבת להכיל לפחות " + 6 + " תוים";
//		}
//		else if (!password.match(/[A-Z]/)) {
//			return "הסיסמא חייבת להכיל לפחות אות אנגלית גדולה אחת";
//		}
//		else if (!password.match(/[0-9]/)) {
//			return "הסיסמא חייבת להכיל לפחות ספרה אחת";
//		}
//
//		return true;
//	};
    
    
//    model.resetForm = function() {
//      model.message = "";
//      model.user = {
//        firstname: "",
//        lastname: "",
//        email: "",
//        password: "",
//        confirmPassword: "",
//        gender: ""     
//    };
//
//    };

  };




}());