(function(){
  var app = angular.module('unacademic.users');

  app.controller('Users', function(users){
    var vm = this;
    var keys = Object.keys(users);

    var usersArray = keys.map(function(key){
      return users[key];
    });

    vm.all = usersArray;
  });
})();
