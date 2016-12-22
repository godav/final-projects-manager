(function () {
    var rout = angular.module("app");

    rout.controller("search", search);

    function search($scope, $rootScope, $http) {

        $scope.search = "";
        $scope.photos = 0;
        $scope.users = 0;
        $scope.projects = 0;

        $http.get('json/pages/getStats')
                .then(function (response) {
                    if (response)
                    {
                        $scope.photos = response.data.photos;
                        $scope.users = response.data.users;
                        $scope.projects = response.data.projects;

                    }

                });



        $scope.find = function () {

            $rootScope.search_query = $scope.search;

        };




    }
}
)();
