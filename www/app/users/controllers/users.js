(function(){
  var app = angular.module('unacademic');

  app.controller('Users', function(users){

    var vm = this;
    vm.all = users;
  });
})();
