(function(){
  var app = angular.module('unacademic.objectives');

  app.controller('AddObjective', function(authentication, session, objectives){

    var vm = this;

    vm.all = objectives;

    function add(id){
    }

    function remove(id){
    }

    return vm;
  });
})();
