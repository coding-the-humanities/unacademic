(function(){
  var app = angular.module('unacademic');

  app.controller('ObjectiveDetails', function(objective){

    var vm = this;

    vm.showDescription = false;
    vm.showTasks = false;
    vm.completion = function(){
      return objective.completion;
    };

    setObjectKeysToVM(objective);

    return vm;

    function setObjectKeysToVM(profile){
      var keys = Object.keys(profile);
      keys.forEach(function(key){
        vm[key] = profile[key];
      });
    }
  });
})();
