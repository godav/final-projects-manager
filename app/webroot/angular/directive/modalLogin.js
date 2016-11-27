(function(){
	var rout = angular.module('app');
	
	
        rout.directive('modall',modal);
        
        function modal() {
        return {
            templateUrl: 'partials/login.html',                       
            restrict: 'E',
            transclude: true,
            replace:true,
            link:function link(scope, element, attrs){                          
               
                scope.$watch('showLogin', function(){
                    console.log(scope.showLogin);
                    if(scope.showLogin===true){
                        $(element).modal('show');              
                    }else{
                        $(element).modal('hide');                             
                    }
                });

            }
        };
     };
	
})();
