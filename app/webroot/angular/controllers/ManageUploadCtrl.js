"use strict";

(function() {
	angular.module("app").controller('ManageUploadCtrl', ManageUploadCtrl);
	function ManageUploadCtrl($scope, fileService) {
		$scope.uploading = false;
		$scope.result="upload";
		$scope.uploadFile = function() {
			$scope.uploading=true;
			var url = $scope.myUrl;
			var file = $scope.myFile;
			console.log("file", file);
                        console.log("url", url);
			fileService.uploadFileToUrl(file, url);
		};
	};
})();
