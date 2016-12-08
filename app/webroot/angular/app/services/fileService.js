"use strict";

(function() {
	angular.module("app").service('fileService', fileService);
	function fileService($http) {
		this.uploadFileToUrl = function(file, uploadUrl,folder,id,callback) {
			var formData = new FormData();
			formData.append('file', file);
                        formData.append('folder', folder);
                        formData.append('id', id);
//                        console.log('formdata:',formData);
			var request = {
				transformRequest : angular.identity,
				headers : {
					'Content-Type' : undefined
				}
			};
			$http.post(uploadUrl, formData, request).success(function(data) {
				//console.log("data", data);
                                callback(data);
//				if (data === "ok") {
//					return data;
//				}

			}).error(function(data) {
				console.log("data", data);
			});
			
		};
	};
})();
