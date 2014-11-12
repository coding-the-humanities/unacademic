(function(){
  var app = angular.module('unacademic.users');

  app.controller('Profile', function(authentication, user, session){

    var vm = this;

    vm.signIn = signIn;
    vm.signOut = signOut;

    vm.isCurrentUser = (user.profile.id === session.user.profile.id);

    setObjectKeysToVM(user.profile);

    return vm;

    function signIn(){
      authentication.signIn();
    }

    function signOut(){
      authentication.signOut();
    }

    function setObjectKeysToVM(profile){
      var keys = Object.keys(profile);
      keys.forEach(function(key){
        vm[key] = profile[key];
      });
    }
  });
})();
