(function(){
  var app = angular.module('unacademic.places.controllers');

  app.controller('Add', function(authentication, session, places){

    var vm = this;

    vm.all = places;

    function add(id){
    }

    function remove(id){
    }

    return vm;
  });
})();
