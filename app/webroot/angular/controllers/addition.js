
(function() {

  var rout = angular.module('app');
  rout.controller("addition", addition);
   function addition($http,$scope,fileService) {
       
  
   
    var model = this;


    model.message = "";
    model.success = false;
    
    model.title = "";
    model.description = "";
    model.photoName = "";
    model.photoLocation ="";

    model.submit = function(isValid) {
  
      if (isValid) {
            var photoData = null;
            if (model.photoName!==null && model.photoName!==""){
                var url = 'json/pages/pictureUpload';
                var file = $scope.myFile;
                var folder = 'users\\img\\project\\';
                var id = $scope.$parent.infoData.id ;

                fileService.uploadFileToUrl(file, url,folder,id,function(response){

                    if (response['full']){
                        model.photoName =  response['name'];
                        model.photoLocation =  response['full'];

                            photoData = $.param({
                                description: model.description,
                                title: model.title,
                                photo_name: model.photoName,
                                photo_location: model.photoLocation,
                                user_id: id
                            });
                    }
                });

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            $http.post('json/pages/registerUser', photoData,config)
             .success(function (data, status, headers, config) {
                 if (data)
                {
                        model.success = true;
                        model.message =  "התמונה הועלתה!";
                }

             })
            .error(function (data, status, header, config) {
                model.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        
         }
        
      } else {
        model.message = "There are still invalid fields below";
      }
            
    };
    
  };

}());