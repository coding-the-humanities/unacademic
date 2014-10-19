(function(){
  var app = angular.module('unacademic');

  app.controller('UserObjectives', function(authentication, user){

    var vm = this;

    vm.all = user.objectives;

    vm.signIn = signIn;

    function signIn(){
      authentication.signIn();
    }

    return vm;
  });
})();
