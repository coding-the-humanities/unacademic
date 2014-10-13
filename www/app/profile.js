(function(){
  var app = angular.module('unacademic')

  app.controller('profile', function(userSession, $firebaseSimpleLogin, FIREBASE_REF){
    userSession.auth = $firebaseSimpleLogin(new Firebase(FIREBASE_REF));

    var vm = this;

    vm.signIn = function(){
      userSession.auth.$login('github');
    }

    vm.signOut = function(){
      userSession.auth.$logout();
      console.log('signed out');
    }

    return vm;
  })
})();
