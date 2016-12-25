(function () {
    var rout = angular.module("app");

    rout.controller("projectReview", projectReview);

    function projectReview($scope, $http, $routeParams) {

        console.log('route parm:', $routeParams);
//        var str = $routeParams.id;
//        console.log(str.replace(':', ''));

        $scope.carousel = [];
        $scope.hasNext = false;
        $scope.hasPrev = false;
        $scope.start = 0;
        $scope.end = 0;
        $scope.current = null;

        var searchData = $.param({
            id: parseInt($routeParams.id)
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('json/pages/getUserPhotos', searchData, config)
                .success(function (data, status, headers, config) {
                    if (data)
                    {
                        if (!data.User.photo_location)
                            {
                                if (data.User.gender === 'M')
                                    data.User.photo_location = 'img/man.png';
                                else
                                    data.User.photo_location = 'img/female.png';
                            } 
                        
                        $scope.user = data.User;

                        $scope.images = data.Photo;
                        $scope.current = data.Photo[0];
                        $scope.date = extractDate($scope.current.upload_date);
                        $scope.time = extractTime($scope.current.upload_date);
                        console.log($scope.user);
                        console.log($scope.images);
                        console.log($scope.current);
                        init_carousel();
                    }

                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                            "<hr />status: " + status +
                            "<hr />headers: " + header +
                            "<hr />config: " + config;
                });


        $scope.next = function () {
            if (!$scope.hasNext)
                return;

            $scope.start++;
            $scope.end++;
            $scope.carousel = $scope.images.slice($scope.start, $scope.end);
            if ($scope.images.length === $scope.end)
                $scope.hasNext = false;
            else
                $scope.hasNext = true;

            $scope.hasPrev = true;
        };


        $scope.prev = function () {
            if (!$scope.hasPrev)
                return;
            $scope.start--;
            $scope.end--;
            $scope.carousel = $scope.images.slice($scope.start, $scope.end);
            if ($scope.start === 0)
                $scope.hasPrev = false;
            else
                $scope.hasPrev = true;
            $scope.hasNext = true;

        };

        function init_carousel() {
            if ($scope.images.length > 3)
            {
                $scope.hasNext = true;
                $scope.end = 4;
            } else
            {
                $scope.hasNext = false;
                $scope.end = $scope.images.length;
            }
            $scope.carousel = $scope.images.slice(0, 4);
        }


        $scope.change = function (image) {
            $scope.date = extractDate(image.upload_date);
            $scope.time = extractTime(image.upload_date);
            $scope.current = image;
        };

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
    ;



})();
