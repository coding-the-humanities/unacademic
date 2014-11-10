(function(){
  var app = angular.module('unacademic');


  app.controller('Signin', function(authentication, session){

    var vm = this;

    vm.pageTitle = "Sign in";
    vm.user = session.user;

    vm.signIn = function(){
      authentication.signIn();
    };

    return vm;
  });
})();
