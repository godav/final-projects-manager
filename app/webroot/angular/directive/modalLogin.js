(function(){
	var rout = angular.module('app');
	
	
        rout.directive('modall',modal);
        
        function modal() {
        return {
            template: '<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' + 
                
                    '<div class="modal-dialog">' +
                         
				'<div class="loginmodal-container">' +
                                 '<div class="modal-header pad-init">' + 
                                     '<button type="button" class="close" ng-click="errLogin=false; toggleLoginModal()"  aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                                     '<h1>התחבר לחשבון שלך</h1>' +
                                 '</div>' +
                                 
                                  '<div class="pad-init" ng-if="errLogin">' +
                                        '<p class="erorr-msg">אחד מפרטי הזיהוי שהוקלדו אינם תקינים</p>' +
                                   '</div>' +
		
				  '<form ng-submit="validateUser( username,userpassword)">' +
					'<input type="text" name="user" placeholder="שם משתמש" ng-model="username" ng-focus="errLogin=false">' +
					'<input type="password" name="pass" placeholder="סיסמא" ng-model="userpassword" ng-focus="errLogin=false">' +
					'<input type="submit" name="login" class="login loginmodal-submit" value="התחבר" ng-focus="errLogin=false">' +
				  '</form>' +
					
				  '<div class="login-help">' +
					'<button id="register" class="btn tran" data-dismiss="modal" ng-click="toggleRegisterModal()" ng-focus="errLogin=false">הירשם</button> - <button class="btn tran" ng-focus="errLogin=false" >שכחתי סיסמא</button>' +
				  '</div>' +
				'</div>' +
	           '</div>' ,
               
            restrict: 'E',
            transclude: true,
            replace:true,
//            scope:{visible: '=', reg: '=',validateUser: '&onValidate'}, 
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
