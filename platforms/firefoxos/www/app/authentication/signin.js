(function(){
  var app = angular.module('unacademic.authentication');


  app.controller('Signin', function(authentication, currentUser){

    var vm = this;

    vm.pageTitle = "Sign in";
    vm.user = currentUser;

    vm.signIn = function(){
      authentication.signIn();
    };

    return vm;
  });
})();
