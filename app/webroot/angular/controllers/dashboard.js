
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
        $scope.commitsData = [];
        $scope.commitsTime = [];

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
            $scope.commitsTime = [];
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
//                            console.log(data);
                            $scope.gituser = data.gituser;
                            $scope.gitproject = data.gitproject;
                            $scope.photos = data.count;
                            if ($scope.gituser !== null && $scope.gituser !== "" && $scope.gitproject !== null && $scope.gitproject !== "") {
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

                                                init_git_chart();
                                            }
                                        });
                                $http.get("https://api.github.com/repos/" + $scope.gituser + "/" + $scope.gitproject + "/commits?page=1&per_page=10")
                                        .then(function (response) {
                                         
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

                                            }
                                        });
                                var rawCommits = "";
                                var editCommits = [];

                                $http.get("https://api.github.com/repos/" + $scope.gituser + "/" + $scope.gitproject + "/commits?per_page=100")
                                        .then(function (response) {
                                            if (response.data.length > 0)
                                            {
                                                rawCommits = response.data;
                                                for (var key in rawCommits) {
                                                    var commit = {
                                                        date: extractDate(rawCommits[key].commit.committer.date)
                                                    };
                                                    editCommits.push(commit);
                                                }
//                    

                                                var tempList = _.countBy(editCommits, 'date');


                                                for (var key in tempList) {
                                                    var tDate = key.split("-");

                                                    $scope.commitsTime.push([Date.UTC(tDate[2], parseInt(tDate[1]) - 1, tDate[0]), tempList[key]]);
                                                }

                                                init_commits_chart();
                                            }
                                        });
                            }
                        }

                    })
                    .error(function (data, status, header, config) {
                        $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                    });

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


        function init_commits_chart() {
            Highcharts.chart('commit-chart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'האחרונים בפרויקט' + ' Commits ' + '-' + 'התפלגות 100 ה'
                },
                subtitle: {
                    text: 'הקלק ומשוך לזום אין'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Commits' + 'מספר '
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null,
                        series: {
                            connectNulls: true
                        }
                    }
                },
                series: [{
                        type: 'area',
                        name: 'Commits',
                        data: $scope.commitsTime
                    }]
            });


        }

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

    }


}());
