/* 
    created by avner ainouz (godav)
 */

(function() {
	angular.module("app")
                .service('StorageService', function ($localStorage) {

            $localStorage = $localStorage.$default({
                uInfo: []
            });    

            var _getAll = function () {
              return $localStorage.uInfo;
            };

            var _add = function (info) {
              $localStorage.uInfo.push(info);
            }

            var _remove = function (info) {
              $localStorage.uInfo.splice($localStorage.uInfo.indexOf(info), 1);
            }

            return {
                getAll: _getAll,
                add: _add,
                remove: _remove
              };
        })
})
();

