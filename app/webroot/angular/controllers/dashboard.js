
/* global Highcharts */

(function () {




    var rout = angular.module('app');
    rout.controller("dashboard", dashboard);
    function dashboard($http, $scope) {

//    https://api.github.com/repos/godav/final-projects-manager/commits
//    
//    https://api.github.com/repos/godav/final-projects-manager/stats/contributors
    
       Highcharts.chart('container', {
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
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
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });

        model.submit = function (isValid) {

            if (isValid) {
                var photoData = null;
                if (model.photoName !== null && model.photoName !== "") {
                    var url = 'json/pages/pictureUpload';
                    var file = $scope.myFile;
                    var folder = 'users\\img\\project\\';
                    var id = $scope.$parent.infoData.id;

                    fileService.uploadFileToUrl(file, url, folder, id, function (response) {

                        if (response['full']) {
                            model.photoName = response['name'];
                            model.photoLocation = response['full'];

                            photoData = $.param({
                                description: model.description,
                                title: model.title,
                                photo_name: model.photoName,
                                photo_location: model.photoLocation,
                                user_id: id
                            });

                            var config = {
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                                }
                            };

                            $http.post('json/pages/addPhotoToUser', photoData, config)
                                    .success(function (data, status, headers, config) {
                                        if (data)
                                        {

                                            model.photo.success = true;
                                            model.photo.message = "התמונה הועלתה!";
                                            $rootScope.$broadcast('galleryUpdated');
//                                            $scope.$parent.updated = true;
                                        //    console.log($scope);
                                        }

                                    })
                                    .error(function (data, status, header, config) {
                                        model.ResponseDetails = "Data: " + data +
                                                "<hr />status: " + status +
                                                "<hr />headers: " + header +
                                                "<hr />config: " + config;
                                    });
                        }


                    });

                }

            } else {
                model.message = "There are still invalid fields below";
            }

        };


    }

}());

