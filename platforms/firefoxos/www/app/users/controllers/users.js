(function(){
  var app = angular.module('unacademic.users');

  app.controller('Users', function(users){

    var vm = this;
    vm.all = users;
  });
})();
