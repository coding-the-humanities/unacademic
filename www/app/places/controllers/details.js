(function(){
  var app = angular.module('unacademic.places');

  app.controller('Details', function(place){

    var vm = this;

    vm.showDescription = false;
    vm.showTasks = false;
    vm.completion = function(){
      return place.completion;
    };

    setObjectKeysToVM(place);

    return vm;

    function setObjectKeysToVM(profile){
      var keys = Object.keys(profile);
      keys.forEach(function(key){
        vm[key] = profile[key];
      });
    }
  });
})();
