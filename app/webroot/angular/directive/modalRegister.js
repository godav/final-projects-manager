(function(){
	var rout = angular.module('app');
	
        rout.directive('modalr',modal);
        
        function modal() {
        return {
            templateUrl: 'partials/registration.html',
            restrict: 'E',
            transclude: true,
            replace:true,

            link:function link(scope, element, attrs){
                
                scope.$watch('showRegister', function(){
                      console.log('showRegister:',scope.showRegister);
                    if(scope.showRegister === true){
                   
                        $(element).modal('show');
                    }else{
        
                        $(element).modal('hide');
                    }
                });                
            }
        };
     };
	
})();
