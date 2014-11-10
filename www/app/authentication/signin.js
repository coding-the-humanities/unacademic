(function(){
  var app = angular.module('unacademic.authentication');


  app.controller('Signin', function(authentication){

    var vm = this;

    vm.pageTitle = "Sign in";

    vm.signIn = function(){
      authentication.signIn();
    };

    return vm;
  });
})();
