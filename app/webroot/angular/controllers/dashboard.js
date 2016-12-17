
/* global Highcharts */

(function () {




    var rout = angular.module('app');
    rout.controller("dashboard", dashboard);
    function dashboard($http, $scope) {
        
        $scope.git_user = "";
        $scope.git_project = "";
        $scope.commits = 0;
        $scope.init = function () {

            userData = $.param({
                id: $scope.$parent.infoData.id
            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/getDashBoard', userData, config)
                    .success(function (data, status, headers, config) {
                        if (data)
                        {

                            $scope.gituser = data.gituser;
                            $scope.gitproject = data.gitproject;

                            $http.get("https://api.github.com/repos/" + $scope.gituser + "/" + $scope.gitproject + "/stats/contributors")
                                    .then(function (response) {
//                                        $scope.details = response.data;
                                        console.log(response.data[0]);
                                        $scope.commits = response.data[0].total;
                                    });
                            
                        }

                    })
                    .error(function (data, status, header, config) {
                        model.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                    });



//
//            $http.get("http://www.omdbapi.com/?s=" + $scope.search)
//                    .then(function (response) {
//                        $scope.related = response.data;
//                    });
        };


//    https://api.github.com/repos/godav/final-projects-manager/commits
//    
//    

        Highcharts.chart('git-chart', {
            title: {
                text: 'שורות קוד שנוספו והוסרו בפרויקט ה-GIT',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'שבוע בפרויקט'
                },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'שורות קוד'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
        });

        Highcharts.chart('commit-chart', {
            title: {
                text: 'התקדמות ה - COMMIT לאורך הפרויקט',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'שבוע בפרויקט'
                },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'שורות קוד'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }]
        });


//        model.submit = function (isValid) {
//
//            if (isValid) {
//                var photoData = null;
//                if (model.photoName !== null && model.photoName !== "") {
//                    var url = 'json/pages/pictureUpload';
//                    var file = $scope.myFile;
//                    var folder = 'users\\img\\project\\';
//                    var id = $scope.$parent.infoData.id;
//
//                    fileService.uploadFileToUrl(file, url, folder, id, function (response) {
//
//                        if (response['full']) {
//                            model.photoName = response['name'];
//                            model.photoLocation = response['full'];
//
//                            photoData = $.param({
//                                description: model.description,
//                                title: model.title,
//                                photo_name: model.photoName,
//                                photo_location: model.photoLocation,
//                                user_id: id
//                            });
//
//                            var config = {
//                                headers: {
//                                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
//                                }
//                            };
//
//                            $http.post('json/pages/addPhotoToUser', photoData, config)
//                                    .success(function (data, status, headers, config) {
//                                        if (data)
//                                        {
//
//                                            model.photo.success = true;
//                                            model.photo.message = "התמונה הועלתה!";
//                                            $rootScope.$broadcast('galleryUpdated');
////                                            $scope.$parent.updated = true;
//                                            //    console.log($scope);
//                                        }
//
//                                    })
//                                    .error(function (data, status, header, config) {
//                                        model.ResponseDetails = "Data: " + data +
//                                                "<hr />status: " + status +
//                                                "<hr />headers: " + header +
//                                                "<hr />config: " + config;
//                                    });
//                        }
//
//
//                    });
//
//                }
//
//            } else {
//                model.message = "There are still invalid fields below";
//            }
//
//        };


    }

}());

