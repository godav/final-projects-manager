(function(){
	var rout = angular.module("app");
	
	rout.controller("search", search);

	function search($scope,$http) {
	
        $scope.search = "";
        
        $scope.find = function(){
            
      
                 var searchData = $.param({
                    search: $scope.search
                });

                var config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                    }
                };

                $http.post('json/pages/getSearch', searchData, config)
                        .success(function (data, status, headers, config) {
                            if (data)
                            {
                                
                                console.log(data);
                   
                            }

                        })
                        .error(function (data, status, header, config) {
                            $scope.ResponseDetails = "Data: " + data +
                                    "<hr />status: " + status +
                                    "<hr />headers: " + header +
                                    "<hr />config: " + config;
                        });

        };
	
	}
	
})();
