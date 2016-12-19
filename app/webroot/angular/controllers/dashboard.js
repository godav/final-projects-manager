
/* global Highcharts */

(function () {




    var rout = angular.module('app');
    rout.controller("dashboard", dashboard);
    function dashboard($http, $scope) {

        $scope.git_user = "";
        $scope.git_project = "";
        $scope.commits = 0;
        $scope.addition = 0;
        $scope.deletion = 0;
        $scope.photos = 0;
        $scope.current_page = 1;
//        $scope.commitsData = [];

        var addition = [];
        var deletion = [];
        var categories = [];
        $scope.init = function () {
            $scope.current_page = 1;
            $scope.git_user = "";
            $scope.git_project = "";
            $scope.commits = 0;
            $scope.addition = 0;
            $scope.deletion = 0;
            $scope.photos = 0;
            $scope.commitsData = [];
            addition = [];
            deletion = [];
            categories = [];
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
                            console.log(data);
                            $scope.gituser = data.gituser;
                            $scope.gitproject = data.gitproject;
                            $scope.photos = data.count;
                            $http.get("https://api.github.com/repos/" + $scope.gituser + "/" + $scope.gitproject + "/stats/contributors")
                                    .then(function (response) {
//                                        $scope.details = response.data;

                                        $scope.commits = response.data[0].total;
                                        if (response.data[0].weeks.length > 0)
                                        {
                                            var weeks = response.data[0].weeks;
                                            var sumAdd = 0;
                                            var sumDel = 0;
                                            for (var key in weeks) {
                                                addition.push(weeks[key].a);
                                                sumAdd += weeks[key].a;
                                                deletion.push(-1 * parseInt(weeks[key].d));
                                                sumDel += (weeks[key].d);
                                                categories.push(parseInt(key) + 1);
                                            }
                                            $scope.addition = numberWithCommas(sumAdd);
                                            $scope.deletion = numberWithCommas(sumDel);
                                        }
                                        init_git_chart();
                                    });
                            $http.get("https://api.github.com/repos/" + $scope.gituser + "/" + $scope.gitproject + "/commits?page=1&per_page=10")
                                    .then(function (response) {


                                        console.log(response);
//
                                        if (response.data.length > 0)
                                        {
                                            var data = response.data;
                                            for (var key in data) {
                                                var commit = {
                                                    message: data[key].commit.message,
                                                    date: extractDate(data[key].commit.committer.date),
                                                    time: extractTime(data[key].commit.committer.date)
                                                };
                                                $scope.commitsData.push(commit);
                                            }

                                            console.log($scope.commitsData);
//                                            $scope.addition = numberWithCommas(sumAdd);
//                                            $scope.deletion = numberWithCommas(sumDel);
                                        }
//                                        init_git_chart();
                                    });
                        }

                    })
                    .error(function (data, status, header, config) {
                        $scope.ResponseDetails = "Data: " + data +
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
        $scope.next = function () {
            $scope.current_page++;
            $http.get("https://api.github.com/repos/" + $scope.gituser + "/" + $scope.gitproject + "/commits?page=" + $scope.current_page + "&per_page=10")
                    .then(function (response) {
                        if (response.data.length > 0)
                        {
                            $scope.commitsData = [];
                            var data = response.data;
                            for (var key in data) {
                                var commit = {
                                    message: data[key].commit.message,
                                    date: extractDate(data[key].commit.committer.date),
                                    time: extractTime(data[key].commit.committer.date)
                                };
                                $scope.commitsData.push(commit);
                            }
                        } else
                            $scope.current_page--;
                        //   $scope.current_page++;
                    });
        };
        $scope.prev = function () {
            if ($scope.current_page === 1)
                return;
            $scope.current_page--;
            $http.get("https://api.github.com/repos/" + $scope.gituser + "/" + $scope.gitproject + "/commits?page=" + $scope.current_page + "&per_page=10")
                    .then(function (response) {
                        if (response.data.length > 0)
                        {
                            $scope.commitsData = [];
                            var data = response.data;
                            for (var key in data) {
                                var commit = {
                                    message: data[key].commit.message,
                                    date: extractDate(data[key].commit.committer.date),
                                    time: extractTime(data[key].commit.committer.date)
                                };
                                $scope.commitsData.push(commit);
                            }
                        }

                    });
        };
//    https://api.github.com/repos/godav/final-projects-manager/commits
//    
//    


        function init_git_chart()
        {

            Highcharts.setOptions({
                lang: {
                    decimalPoint: '.',
                    thousandsSep: ','
                }
            });
            Highcharts.chart('git-chart', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'GIT' + ' - ' + 'שורות קוד שנוספו והוסרו בפרויקט ה',
                    x: -20 //center
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    title: {
                        text: 'שבוע בפרויקט'
                    },
                    categories: categories
                },
                yAxis: {
                    title: {
                        text: 'שורות קוד'
                    }
                },
                tooltip: {
                    headerFormat: '<small><b>week {point.key}:</b></small><br>',
                    pointFormat: '{series.name}: <b>{point.y}</b>',
                    valueSuffix: ' rows',
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                        color: '#00c0ef',
                        name: 'Additions',
                        data: addition
                    }, {
                        color: '#dd4b39',
                        name: 'Deletions',
                        data: deletion
                    }]
            });
        }


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
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


        function extractDate(timestamp)
        {

            var d = new Date(timestamp);
            return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        }

        function extractTime(timestamp)
        {
            var d = new Date(timestamp);
            var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
            var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
            return hours + ":" + minutes;
        }
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
//



//var d = new Date(1245398693390);
//var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
//var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
//var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
//var formattedTime = hours + ":" + minutes;
//
//formattedDate = formattedDate + " " + formattedTime;