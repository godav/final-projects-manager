(function () {
    var rout = angular.module('app');

    rout.controller("projects", projects);

    function projects($scope, $http) {

        $scope.projectsData = [];
        $scope.current_page = 1;
        $scope.allProjects = [];


        $scope.init = function () {
            
            $scope.current_page = 1;
            $scope.projectsData = [];
            $scope.allProjects = [];
            
            $http.get('json/pages/getProjects')
                    .success(function (data, status, headers, config) {
                   
                        $scope.projectsData = data;
                        $scope.total_pages = Math.ceil(data.length / 6);
                   


                    })
                    .error(function (data, status, header, config) {
                        $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                    });
        };

        $scope.more = function(){
            $scope.current_page++;
        };

    }

})();
