"use strict";

(function() {
	angular.module("app").controller('ManageUploadCtrl', ManageUploadCtrl);
	function ManageUploadCtrl($scope, fileService) {
		$scope.uploading = false;
		$scope.result="upload";
		$scope.uploadFile = function() {
			$scope.uploading=true;
			var url = 'json/pages/pictureUpload';
			var file = $scope.myFile;
                        var folder = $scope.myFolder;
			console.log("file ", file);
                        console.log("url ", url);
                        console.log("folder ", folder);
			fileService.uploadFileToUrl(file, url,folder);
		};
	};
})();
