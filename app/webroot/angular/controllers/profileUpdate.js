
(function () {

    var rout = angular.module('app');
    rout.controller("profileUpdate", profileUpdate);

    function profileUpdate($http, $scope, fileService, $timeout, $modal) {

        var model = this;

        $scope.open = function () {

            $scope.opts = {
                backdrop: true,
                backdropClick: true,
                dialogFade: true,
                keyboard: true,
                size: 'sm',
                templateUrl: 'partials/modalMessage.html',
                controller: ModalInstanceCtrl,
                resolve: {} // empty storage
            };

            var modalInstance = $modal.open($scope.opts);

//            modalInstance.result.then(function () {
//                //on ok button press 
//            }, function () {
//                //on cancel button press
//                console.log("Modal Closed");
//            });

        };


//    modalInstance = $modal.open({
//      templateUrl: 'partials/modalMessage.html',
//      controller: ModalInstanceCtrl,
//      backdrop: true,
//      keyboard: true,
//      backdropClick: true,
//      size: 'lg'
//      
//    });
//  };






        var defaults = {
            firstname: "",
            lastname: "",
            email: "",
            gituser: "",
            gitproject: "",
            gender: "",
            photoName: "",
            photoLocation: "",
            url: "",
            projectDescription: ""
        };

        model.changed = false;
        model.profilePicture = "";
        model.user = {
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            gituser: "",
            gitproject: "",
            gender: "",
            photoName: "",
            photoLocation: "",
            role: "",
            url: "",
            projectDescription: ""
        };

        $scope.changeValue = function () {
            if (model.user.firstname !== defaults.firstname)
                model.changed = true;
            else if (model.user.lastname !== defaults.lastname)
                model.changed = true;
            else if (model.user.email !== defaults.email)
                model.changed = true;
            else if (model.user.gender !== defaults.gender)
                model.changed = true;
            else if ((model.user.gituser !== defaults.gituser) && !(defaults.gituser === null && model.user.gituser === ""))
                model.changed = true;
            else if ((model.user.gitproject !== defaults.gitproject) && !(defaults.gitproject === null && model.user.gitproject === ""))
                model.changed = true;
            else if ((model.user.url !== defaults.url) && !(defaults.url === null && model.user.url === ""))
                model.changed = true;
            else if ((model.user.projectDescription !== defaults.projectDescription) && !(defaults.projectDescription === null && model.user.projectDescription === ""))
                model.changed = true;
            else if (model.user.photoName !== defaults.photoName)
                model.changed = true;
            else
                model.changed = false;


        };

        $scope.init = function () {

            $scope.myFile = null;
            model.user.id = $scope.$parent.infoData.id;
            var Data = $.param({
                id: $scope.$parent.infoData.id

            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/getUserProfile', Data, config)
                    .success(function (data, status, headers, config) {
                        if (data)
                        {
                            model.user.firstname = data.User.first_name;
                            model.user.lastname = data.User.last_name;
                            model.user.email = data.User.email;
                            model.user.gender = data.User.gender;
                            model.user.gituser = data.User.gituser;
                            model.user.gitproject = data.User.gitproject;
                            model.user.url = data.User.url;
                            model.user.projectDescription = data.User.project_description;
                            model.user.role = data.User.role;
                            model.user.photoName = data.User.photo_name;
                            model.user.photoLocation = data.User.photo_location;
                            if (!data.User.photo_location)
                            {
                                if (model.user.gender === 'M')
                                    model.profilePicture = 'img/man.png';
                                else
                                    model.profilePicture = 'img/female.png';
                            } else
                                model.profilePicture = model.user.photoLocation;

//                    model.user.file = data.User.photo;
                            defaults.firstname = data.User.first_name;
                            defaults.lastname = data.User.last_name;
                            defaults.email = data.User.email;
                            defaults.gender = data.User.gender;
                            defaults.gituser = data.User.gituser;
                            defaults.gitproject = data.User.gitproject;
                            defaults.photoName = data.User.photo_name;
                            defaults.url = data.User.url;
                            defaults.projectDescription = data.User.project_description;

                            model.changed = false;

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

        model.submit = function (isValid) {

            if (isValid) {
                //      model.message = "Submitted " + model.user.username;
                var updateData = null;

                if (model.user.photoName !== defaults.photoName) {
                    var url = 'json/pages/pictureUpload';
                    var file = $scope.myFile;
                    var folder = 'users\\img\\profile\\';
                    var id = $scope.$parent.infoData.id;

                    fileService.uploadFileToUrl(file, url, folder, id, function (response) {

                        if (response['full']) {
                            model.user.photoName = response['name'];
                            model.user.photoLocation = response['full'];

                            updateData = $.param({
                                id: model.user.id,
                                first_name: model.user.firstname,
                                last_name: model.user.lastname,
                                email: model.user.email,
                                gender: model.user.gender,
                                gituser: model.user.gituser,
                                gitproject: model.user.gitproject,
                                photo_name: model.user.photoName,
                                photo_location: model.user.photoLocation,
                                url: model.user.url,
                                project_description: model.user.projectDescription
                            });
                        }
                    });

                } else {
                    updateData = $.param({
                        id: model.user.id,
                        first_name: model.user.firstname,
                        last_name: model.user.lastname,
                        email: model.user.email,
                        gender: model.user.gender,
                        gituser: model.user.gituser,
                        gitproject: model.user.gitproject,
                        url: model.user.url,
                        project_description: model.user.projectDescription
                    });

                }
                var config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                    }
                };
                $timeout(function () {

                    $http.post('json/pages/updateUser', updateData, config)
                            .success(function (data, status, headers, config) {

                                if (data)
                                {
                                    $scope.open();
//                                    model.success = true;
//                                    model.message = "הנתונים עודכנו!";
                                    $scope.init();
                                }
                            })
                            .error(function (data, status, header, config) {
                                model.ResponseDetails = "Data: " + data +
                                        "<hr />status: " + status +
                                        "<hr />headers: " + header +
                                        "<hr />config: " + config;
                            });

                }, 1000);

            } else {
                model.message = "There are still invalid fields below";
            }
        };

        model.checkEmail = function (email) {
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if (!email)
                return;

            else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length)
            {
                return 'כתובת הדואר האלקטרוני אינה תיקנית';
            }

            return true;
        };

    }


    var ModalInstanceCtrl = function ($scope, $modalInstance,$timeout) {

        $timeout(function () {
            $modalInstance.close();
        }, 2000);


    };
})();