(function(){
  var app = angular.module('unacademic.userplaces');

  app.controller('Index', function(authentication, session){

    var vm = this;

    vm.all = session.user.places;
    vm.empty = function(){
      return Object.keys(vm.all).length < 1;
    };

    return vm;
  });
})();
