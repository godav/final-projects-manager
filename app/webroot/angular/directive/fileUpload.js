"use strict";

(function() {
	angular.module("app").directive('fileUpload', fileUpload);

	function fileUpload($parse) {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				var func = $parse(attrs.fileUpload);
				var uploadFunc = func.assign;
				element.bind('change', function() {
					scope.$apply(function() {
						uploadFunc(scope, element[0].files[0]);
                                                scope.profile.user.photoName = scope.myFile.name;
                                             //   console.log(scope.$parent);
					});
				});
			}
		};
	};
})();
