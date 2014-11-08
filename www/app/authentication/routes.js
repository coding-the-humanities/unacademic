(function(){
  var app = angular.module('unacademic.authentication');

  app.config(function($stateProvider) {

    $stateProvider.state('signin', {
      url: '/',
      templateUrl: 'app/authentication/views/signin.html',
      controller: "Signin as vm"
    });
  });
})();
