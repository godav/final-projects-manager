(function(){
	var rout = angular.module('app');
	
	
        rout.directive('modall',modal);
        
        function modal() {
        return {
            template: '<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' + 
                
                    '<div class="modal-dialog">' +
                         
				'<div class="loginmodal-container">' +
                                 '<div class="modal-header pad-init">' + 
                                     '<button type="button" class="close" ng-click="toggleLoginModal()" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                                     '<h1>התחבר לחשבון שלך</h1>' +
                                 '</div>' +
                               
		
				  '<form ng-submit="validateUser( username,userpassword)">' +
					'<input type="text" name="user" placeholder="שם משתמש" ng-model="username">' +
					'<input type="password" name="pass" placeholder="סיסמא" ng-model="userpassword">' +
					'<input type="submit" name="login" class="login loginmodal-submit" value="התחבר">' +
				  '</form>' +
					
				  '<div class="login-help">' +
					'<button id="register" class="btn tran" data-dismiss="modal" ng-click="toggleRegisterModal()" >הירשם</button> - <button class="btn tran" " >שכחתי סיסמא</button>' +
				  '</div>' +
				'</div>' +
	           '</div>' ,
               
            restrict: 'E',
            transclude: true,
            replace:true,
//            scope:{visible: '=', reg: '=',validateUser: '&onValidate'}, 
            link:function link(scope, element, attrs){                          
//                console.log(scope);
//                console.log(element);
//                console.log(attrs);
//                
//                 console.log($(element));
//                 scope.data="data";
//                scope.toggleRegisterModal = function(event){
//                 if (event.target.id ==='register')    
//                       scope.reg = true;
//                };
                
//                 scope.validateUser = function(user,pass){
//                 
//                };
//                
//                $(element).modal({
//                    show: false, 
//                    keyboard: attrs.keyboard, 
//                    backdrop: attrs.backdrop
//                });
                
                
                scope.$watch('showLogin', function(){
                    console.log(scope.showLogin);
                    if(scope.showLogin===true){
                        $(element).modal('show');              
                    }else{
                        $(element).modal('hide');                             
                    }
                });
                
//                $(element).on('shown.bs.modal', function(){
//                    console.log('in shown');
//                  scope.$apply(function(){
//                      console.log(scope.$parent);
//                    scope.$parent[attrs.visible] = true;
//                  });
//                });
                
//                $(element).on('shown.bs.modal', function(){
//                  scope.$apply(function(){
//                      scope.onSown({
//                          
//                      });
//                  });
//                });

//                $(element).on('hidden.bs.modal', function(){
//                  scope.$apply(function(){
//                    scope.$parent[attrs.visible] = false;
//                  });
//                });
                
//                $(element).on('hidden.bs.modal', function(){
//                  scope.$apply(function(){
//                      scope.onHide({
//                   
//                      });
//                  });
//                });

//                 var r= rout.element(element.find('button.clear'));
//                    console.log(el.find('.clear'));
//                    clear.bind("click", function () {
//                        alert("here");
//                    });
//
//              $('#register').bind('click',  );

//              $('#register').on('click', function() {
//                scope.$apply( function() {
//        scope.caretPosition = $el.caret();
//      });
//  });
            }
        };
     };
	
})();
