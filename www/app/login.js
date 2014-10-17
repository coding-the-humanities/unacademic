(function(){
  var app = angular.module('unacademic');


  app.controller('Login', function(authentication, currentUser){

    var vm = this;

    vm.pageTitle = "Sign in";
    vm.user = currentUser;

    vm.signIn = function(){
      authentication.signIn();
      console.log(currentUser);
    };

    vm.signOut = function(){
      authentication.signOut();
      console.log(currentUser);
    };

    return vm;
  });
})();
