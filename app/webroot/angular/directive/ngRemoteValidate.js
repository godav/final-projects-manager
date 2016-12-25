(function () {
    var rout = angular.module('app');
    rout.directive('ngUnique', ['$http', function ($http) {
            return {
                require: 'ngModel',
                link: function (scope, elem, attrs, ctrl) {
                    elem.on('blur', function (evt) {
                        scope.uniqueEmail = true;
                        scope.$apply(function () {
                            $http({
                                method: 'POST',
                                url: 'json/pages/checkemail',

                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                                },
                                data: $.param({
                                    email: elem.val()
                                })



                            }).success(function (data, status, headers, config) {

                                ctrl.$setValidity('unique', data.status);
                                if (!data.status)
                                    scope.uniqueEmail = false;
                            });
                        });
                    });
                }
            };
        }
    ]);

})();