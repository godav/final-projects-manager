(function(){
	var rout = angular.module('app');
	
	rout.controller("projects", projects);

	function projects($scope,$http) {
	
        $scope.projectsData = [];

        
        
        
                $scope.init = function () {

            $scope.projectsData = [];

            $http.get('json/pages/getProjects')
                    .success(function (data, status, headers, config) {
                        console.log(data);
                        
//                        if (data)
//                        {
//                            model.user.firstname = data.User.first_name;
//                            model.user.lastname = data.User.last_name;
//                            model.user.email = data.User.email;
//                            model.user.gender = data.User.gender;
//                            model.user.gituser = data.User.gituser;
//                            model.user.gitproject = data.User.gitproject;
//                            model.user.url = data.User.url;
//                            model.user.projectDescription = data.User.project_description;
//                            model.user.role = data.User.role;
//                            model.user.photoName = data.User.photo_name;
//                            model.user.photoLocation = data.User.photo_location;
//                            if (!data.User.photo_location)
//                            {
//                                if (model.user.gender === 'M')
//                                    model.profilePicture = 'img/man.png';
//                                else
//                                    model.profilePicture = 'img/female.png';
//                            } else
//                                model.profilePicture = model.user.photoLocation;
//
//
//                        }

                    })
                    .error(function (data, status, header, config) {
                        $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                    });
        };

	
	}
	
})();
