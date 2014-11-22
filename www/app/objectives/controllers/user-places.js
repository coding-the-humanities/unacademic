(function(){
  var app = angular.module('unacademic.objectives');

  app.controller('UserPlaces', function(authentication, session){

    var vm = this;

    vm.all = session.user.objectives;
    vm.empty = function(){
      return Object.keys(vm.all).length < 1;
    };

    return vm;
  });
})();
