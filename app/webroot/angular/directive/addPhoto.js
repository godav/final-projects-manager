(function(){
	var rout = angular.module('app');
	
        rout.directive('addp',addPhoto);
        
        function addPhoto() {
        return {
            templateUrl: 'partials/addphoto.html',
            restrict: 'E',
            transclude: true,
            replace:true,

            link:function link(scope, element, attrs){
                
                scope.$watch('showAddPhoto', function(){
//                      console.log('showRegister:',scope.showRegister);
                    if(scope.showAddPhoto === true){
                   
                        $(element).modal('show');
                    }else{
        
                        $(element).modal('hide');
                    }
                });                
            }
        };
     };
	
})();
