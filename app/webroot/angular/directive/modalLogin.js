(function(){
	var rout = angular.module('app');
	
	
        rout.directive('modall',modal);
        
        function modal() {
        return {
            template: '<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' + 
                
                    '<div class="modal-dialog">' +
                         
				'<div class="loginmodal-container">' +
                                 '<div class="modal-header pad-init">' + 
                                     '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                                     '<h1>התחבר לחשבון שלך</h1>' +
                                 '</div>' +
                               
				
				  '<form>' +
					'<input type="text" name="user" placeholder="דואר אלקטרוני" >' +
					'<input type="password" name="pass" placeholder="סיסמא">' +
					'<input type="submit" name="login" class="login loginmodal-submit" value="התחבר">' +
				  '</form>' +
					
				  '<div class="login-help">' +
					'<button class="btn" data-dismiss="modal" ng-click="toggleRegisterModal()" >הירשם</button> - <button class="btn" ng-click="toggleRegisterModal()" >שכחתי סיסמא</button>' +
				  '</div>' +
				'</div>' +
	           '</div>' ,
               
            restrict: 'E',
            transclude: true,
            replace:true,
            scope:{visible:'=', onSown:'&', onHide:'&'}, 
            link:function postLink(scope, element, attrs){
                 scope.showRegister = false;
                 scope.toggleRegisterModal = function(){
                     alert(scope.showRegister);
                       scope.showRegister = !scope.showRegister;
                      alert(scope.showRegister);  
                };
                
                $(element).modal({
                    show: false, 
                    keyboard: attrs.keyboard, 
                    backdrop: attrs.backdrop
                });
                
                scope.$watch(function(){return scope.visible;}, function(value){
                    
                    if(value === true){
                   
                        $(element).modal('show');
                    }else{
        
                        $(element).modal('hide');
                    }
                });
                
                $(element).on('shown.bs.modal', function(){
                  scope.$apply(function(){
                    scope.$parent[attrs.visible] = true;
                  });
                });
                
                $(element).on('shown.bs.modal', function(){
                  scope.$apply(function(){
                      scope.onSown({});
                  });
                });

                $(element).on('hidden.bs.modal', function(){
                  scope.$apply(function(){
                    scope.$parent[attrs.visible] = false;
                  });
                });
                
                $(element).on('hidden.bs.modal', function(){
                  scope.$apply(function(){
                      scope.onHide({});
                  });
                });
            }
        };
     };
	
})();
