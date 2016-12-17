(function(){
	var rout = angular.module('app');
	
        rout.directive('updatep',updatePhoto);
        
        function updatePhoto() {
        return {
            templateUrl: 'partials/updatephoto.html',
            restrict: 'E',
            transclude: true,
            replace:true,

            link:function link(scope, element, attrs){
                
                scope.$watch('showUpdatePhoto', function(){
//                      console.log('showRegister:',scope.showRegister);
                    if(scope.showUpdatePhoto === true){
                   
                        $(element).modal('show');
                      
                    }else{
           
//                        scope.updated = false;
//                        scope.apply();
                        $(element).modal('hide');
                    }
                });                
            }
        };
     };
	
})();
