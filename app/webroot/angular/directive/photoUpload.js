"use strict";

(function() {
	angular.module("app").directive('photoUpload', photoUpload);

	function photoUpload($parse) {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				var func = $parse(attrs.photoUpload);
				var photoFunc = func.assign;
				element.bind('change', function() {
					scope.$apply(function() {
						photoFunc(scope, element[0].files[0]);
                                          
                                                if (scope.myFile.name){
                                          
                                                    scope.addition.photoName = scope.myFile.name;
                                          
//                                              
                                                }
                            
					});
				});
			}
		};
	};
})();
