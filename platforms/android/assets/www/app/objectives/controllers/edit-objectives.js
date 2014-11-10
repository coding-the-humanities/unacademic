(function(){
  var app = angular.module('unacademic.objectives');

  app.controller('EditObjectives', function(authentication, session, objectives){

    var vm = this;

    vm.all = objectives;

    vm.signIn = signIn;
    vm.add = add;
    vm.remove = remove;

    function signIn(){
      authentication.signIn();
    }

    function add(id){
      objectives[id].added = true;
      session.user.addObjective(id);
    }

    function remove(id){
      objectives[id].added = false;
      session.user.removeObjective(id);
    }

    return vm;
  });
})();
