(function(){
  var app = angular.module('unacademic');

  app.controller('Profile', function(authentication, currentUser){

    var vm = this;

    vm.pageTitle = "Profile";
    vm.user = currentUser;

    vm.signIn = function(){
      authentication.signIn();
    };

    vm.signOut = function(){
      authentication.signOut();
    };

    return vm;
  });
})();
