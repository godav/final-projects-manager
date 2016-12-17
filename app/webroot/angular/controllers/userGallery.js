
(function () {




    var rout = angular.module('app');
    rout.controller("userGallery", userGallery);
    function userGallery($http, $scope, $timeout) {

        $scope.photos = null;

        $scope.init = function () {

            $scope.getGallery();
        };


         $scope.getGallery = function () {

            var photoData = $.param({
                user_id: $scope.$parent.infoData.id
            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/getUserGallery', photoData, config)
                    .success(function (data, status, headers, config) {
                        if (data)
                        {

                                $scope.photos = data;


                        }
                    })
                    .error(function (data, status, header, config) {
                        $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                    });

        };

        // delete photo and return photo to user
        $scope.deletePhoto = function (photo_id, photo) {

            var photoData = $.param({
                id: photo_id,
                photo_location: photo,
                user_id: $scope.$parent.infoData.id
            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/deletePhotoToUser', photoData, config)
                    .success(function (data, status, headers, config) {
                        if (data)
                        {
//                             $timeout(function () {
                            $scope.photos = data;
                            console.log($scope.photos);
//                        });
                        }
                    })
                    .error(function (data, status, header, config) {
                        $scope.ResponseDetails = "Data: " + data +
                                "<hr />status: " + status +
                                "<hr />headers: " + header +
                                "<hr />config: " + config;
                    });

        };

        $scope.$watch("photos", function (newValue, oldValue) {
            
            
            $timeout(function () {

                $('.with-caption').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    image: {
                        verticalFit: true,
                        titleSrc: function (item) {
                            return item.el.attr('title');
                        }
                    },
                    zoom: {
                        enabled: true
                    }
                });

            });
        });


        $scope.$on('galleryUpdated', function(event, args) {


            $scope.getGallery();

        });

    }

}());

