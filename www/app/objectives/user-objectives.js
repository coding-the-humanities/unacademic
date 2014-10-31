(function(){
  var app = angular.module('unacademic');

  app.controller('UserObjectives', function(authentication, user){

    var vm = this;

    vm.all = user.objectives;
    vm.empty = function(){
      return Object.keys(user.objectives).length < 1;
    };

    vm.signIn = signIn;

    function signIn(){
      authentication.signIn();
    }

    return vm;
  });
})();
