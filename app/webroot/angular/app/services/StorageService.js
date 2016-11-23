/* 
    created by avner ainouz (godav)
 */

(function() {
	angular.module("app")
                .service('StorageService', function ($localStorage) {

            $localStorage = $localStorage.$default({
                uInfo: {}
            });    

            var _get = function () {
              return $localStorage.uInfo;
            };

            var _add = function (info) {
              $localStorage.uInfo =  info;
            };

            var _remove = function () {
              $localStorage.uInfo = {};
            };

            return {
                get: _get,
                add: _add,
                remove: _remove
              };
        })
})
();

