(function () {
    var rout = angular.module("app");

    rout.controller("searchResults", searchResults);

    function searchResults($scope, $http, $rootScope) {

        $scope.search = $rootScope.search_query;

        console.log($scope.search);

        $scope.current_page = 1;
        $scope.projectsData = [];
        $scope.allProjects = [];




        var searchData = $.param({
            search: $scope.search
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('json/pages/getSearch', searchData, config)
                .success(function (data, status, headers, config) {
                    if (data)
                    {
                        console.log(data);

                        $scope.projectsData = data;
                        $scope.total_pages = Math.ceil(data.length / 6);



// http://stackoverflow.com/questions/39086657/pass-json-data-from-one-controller-to-other-angularjs                  


                    }

                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                            "<hr />status: " + status +
                            "<hr />headers: " + header +
                            "<hr />config: " + config;
                });


        $scope.more = function () {
            $scope.current_page++;
        };

    }
    ;

})();
