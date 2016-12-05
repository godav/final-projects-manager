"use strict";

(function() {
	angular.module("app").directive('fileFolder', fileFolder);

	function fileFolder($parse) {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				var func = $parse(attrs.fileUrl);
				var uploadFunc = func.assign;
				element.bind('change', function() {
					scope.$apply(function() {
						uploadFunc(scope, element[0].files[0]);
					});
				});
			}
		};
	};
})();
