(function(){
  var app = angular.module('unacademic');

  app.controller('EditObjectives', function(userObjectives, authentication, user, objectives){

    var vm = this;

    vm.all = objectives;

    vm.signIn = signIn;
    vm.add = add;
    vm.remove = remove;

    function signIn(){
      authentication.signIn();
    }

    function add(id){
      console.log(id);
      objectives[id].added = true;
      user.addObjective(id);
    }

    function remove(id){
      objectives[id].added = false;
      user.removeObjective(id);
    }

    return vm;
  });
})();
