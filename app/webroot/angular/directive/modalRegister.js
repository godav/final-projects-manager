(function(){
	var rout = angular.module('app');
	
        rout.directive('modalr',modal);
        
        function modal() {
        return {
            template: '<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">' + 
                        
                    '<div class="modal-dialog modal-lg">' +
                         
			'<div class="loginmodal-container registermodal-container">' +
                                 '<div class="modal-header pad-init">' + 
                                     '<button type="button" class="close" ng-click="toggleRegisterModal()" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                                     '<h1>פתח חשבון</h1>' +
                                 '</div>' +
                               
                                 '<div  class="form">' +
                                     '<form id="contactform">' + 
//                                             '<input id="name" name="name" placeholder="First and last name" required="" tabindex="1" type="text">' +
                                             '<input id="firstName" type="text" name="firstname" placeholder="שם פרטי" tabindex="1" required="">' +
                                             '<input id="lastName" type="text" name="lastname" placeholder="שם משפחה" tabindex="2" required="">' +        
                          
                                             '<input id="email" name="email" placeholder="דואר אלקטרוני" required="" type="email" tabindex="3">' +
                     
//                                             '<input id="username" name="username" placeholder="בחר שם משתמש" required="" tabindex="4" type="text">' + 
    			 
                                             '<input type="password" id="password" name="password" placeholder="סיסמא" required="" tabindex="5" ngMinlength=8 ngMaxlength=20>' +

                                              '<input type="password" id="repassword" name="repassword" placeholder="אימות סיסמא" required="" tabindex="6" ngMinlength=8 ngMaxlength=20>' + 
//                                              '<input id="phone" name="phone" placeholder="מספר טלפון" required="" type="text">' +
//                                        '<fieldset>' +
//                                            '<label class="birth-day-caption">תאריך לידה</label>' +
//                                            '<div class="birth-container">' +
//                                                '<input class="birthday" maxlength="2" name="BirthDay"  placeholder="יום" required="">' +
//                                                '<label class="month">' + 
//                                                   '<select class="select-style" name="BirthMonth">' +
//                                                       '<option value="">חודש</option>' +
//                                                       '<option  value="01">ינואר</option>' +
//                                                       '<option value="02">פברואר</option>' +
//                                                       '<option value="03" >מרץ</option>' +
//                                                       '<option value="04">אפריל</option>' +
//                                                       '<option value="05">מאי</option>' +
//                                                       '<option value="06">יוני</option>' +
//                                                       '<option value="07">יולי</option>' +
//                                                       '<option value="08">אוגוסט</option>' +
//                                                       '<option value="09">ספטמבר</option>' +
//                                                       '<option value="10">אוקטובר</option>' +
//                                                       '<option value="11">נובמבר</option>' +
//                                                       '<option value="12" >דצמבר</option>' +
//                                                    '</select>' +                                                  
//                                                '</label>' +
//
//                                              '<input class="birthyear" maxlength="4" name="BirthYear" placeholder="שנה" required="">' +
//                                            '</div>'  +
//                                         '</fieldset><br>' +
//  
  
                                         '<fieldset required="">' +
                                            '<label class="gender-caption">מין</label>' +
                                            '<input type="radio" name="gender" value="Male" ng-required="!gender" ng-model="gender"><span>זכר</span>' +
                                            '<input type="radio" name="gender" value="Female" ng-required="!gender" ng-model="gender"><span>נקבה</span>' +
                                         '</fieldset><br>' +   
  
  
//                                        '<select class="select-style gender" name="gender">' +
//                                        '<option value="select">i am..</option>' +
//                                        '<option value="m">Male</option>' +
//                                        '<option value="f">Female</option>' +
//                                        '<option value="others">Other</option>' +
//                                        '</select><br><br>' +
            

                                       
                                        '<input class="login loginmodal-submit" name="submit" id="submit" tabindex="5" value="בצע רישום" type="submit">' + 	 
                                   '</form>' + 
                                '</div>' +  
			
			'</div>' +
	           '</div>' ,

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
