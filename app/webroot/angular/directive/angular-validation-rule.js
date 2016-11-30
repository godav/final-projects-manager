(function() {
  angular
    .module('validation.rule', ['validation'])
    .config(['$validationProvider', function($validationProvider) {
      var expression = {
        required: function(value) {
          return !!value;
        },
        url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
        email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        number: /^\d+$/,
        minlength: function(value, scope, element, attrs, param) {
          return value && value.length >= param;
        },
        maxlength: function(value, scope, element, attrs, param) {
          return !value || value.length <= param;
        }
      };

      var defaultMsg = {
        required: {
          error: 'נדרש!',
          success: 'It\'s Required'
        },
        url: {
          error: 'This should be Url',
          success: 'It\'s Url'
        },
        email: {
          error: 'כתובת הדואר האלקטרוני אינה תקינה!',
          success: 'It\'s Email'
        },
        number: {
          error: 'This should be Number',
          success: 'It\'s Number'
        },
        minlength: {
          error: 'מינימום 6 תוים!',
          success: 'Long enough!'
        },
        maxlength: {
          error: 'מקסימום 20 תוים!',
          success: 'Short enough!'
        }
      };
      $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
    }]);
}).call(this);