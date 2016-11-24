(function(){
	var rout = angular.module('app');
	
        rout.directive('modalr',modal);
        
        function modal() {
        return {
             templateUrl: 'partials/registration.html',
        
//            template: '<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' + 
//                        
//                    '<div class="modal-dialog modal-lg">' +
//                         
//			'<div class="loginmodal-container registermodal-container">' +
//                                 '<div class="modal-header pad-init">' + 
//                                     '<button type="button" class="close" ng-click="toggleRegisterModal()" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
//                                     '<h1>פתח חשבון</h1>' +
//                                 '</div>' +
//                                 '<h3>{{ registration.message }}</h3>' +
//                                 '<div  class="form" ng-controller="RegistrationController as registration>' +
//                                     '<form name="registrationForm" novalidate ng-submit="registration.submit(registrationForm.$valid)>' + 
////                                            
//                                             '<input id="firstName" type="text" name="firstname" placeholder="שם פרטי" tabindex="1" required ng-model="registration.firstname">' +
//                                             '<div ng-messages="registrationForm.username.$error" ng-messages-include="messages.html"></div>' +        
//                                           
//                                            '<input id="lastName" type="text" name="lastname" placeholder="שם משפחה" tabindex="2" required="" ng-model="registration.lastname">' +        
//                          
//                                             '<input id="email" name="email" placeholder="דואר אלקטרוני" required="" type="email" tabindex="3" ng-model="registration.email">' +
//                     
////                                             '<input id="username" name="username" placeholder="בחר שם משתמש" required="" tabindex="4" type="text">' + 
//    			 
//                                             '<input type="password" id="password" name="password" placeholder="סיסמא" required="" tabindex="5" ngMinlength=8 ngMaxlength=20 ng-model="registration.password">' +
//
//                                              '<input type="password" id="repassword" name="repassword" placeholder="אימות סיסמא" required="" tabindex="6" ngMinlength=8 ngMaxlength=20 ng-model="registration.confirmPassword" compare-to="registration.password">' +   
//  
//                                         '<fieldset>' +
//                                            '<label class="gender-caption">מין</label>' +
//                                            '<input type="radio" name="gender" value="Male" ng-required="!registration.user.gender" ng-model="registration.user.gender"><span>זכר</span>' +
//                                            '<input type="radio" name="gender" value="Female" ng-required="!registration.user.gender" ng-model="registration.user.gender"><span>נקבה</span>' +
//                                         '</fieldset><br>' +   
//                                        
//                                        '<input class="login loginmodal-submit" name="submit" id="submit" tabindex="5" value="בצע רישום" type="submit">' + 	 
//                                   '</form>' + 
//                                '</div>' +  
//			
//			'</div>' +
//	           '</div>' ,

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
