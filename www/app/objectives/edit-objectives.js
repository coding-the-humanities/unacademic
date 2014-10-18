(function(){
  var app = angular.module('unacademic');

  app.controller('EditObjectives', function(authentication, user, objectives){

    var vm = this;

    vm.all = objectives;

    vm.signIn = signIn;

    function signIn(){
      authentication.signIn();
    }

    return vm;
  });
})();
