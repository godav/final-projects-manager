"use strict";

(function() {
	angular.module("app").directive('photoUpload', photoUpload);

	function photoUpload($parse) {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				var func = $parse(attrs.photoUpload);
				var uploadFunc = func.assign;
				element.bind('change', function() {
					scope.$apply(function() {
						uploadFunc(scope, element[0].files[0]);
                                                if (scope.myFile.name){
                                                    scope.photoName = scope.myFile.name;
//                                                    scope.changed = true;
                                                }
                                             //   console.log(scope.$parent);
					});
				});
			}
		};
	};
})();
