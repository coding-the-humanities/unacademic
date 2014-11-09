(function(){
  var app = angular.module('unacademic.authentication');

  app.service('authentication', function(users, currentUser, $state){
    return {
      getCurrentUserId: getCurrentUserId,
      getCurrentUserProfile: getCurrentUserProfile,
      getCurrentUserObjectives: getCurrentUserObjectives,
      signIn: signIn,
      signOut: signOut
    };

    function getCurrentUserId(){
      return currentUser.id;
    }

    function getCurrentUserProfile(){
      return currentUser.profile;
    }

    function getCurrentUserObjectives(){
      return currentUser.objectives;
    }

    function signIn(){
      currentUser.id = "yeehaa123";
      $state.go('app.objectives.user');
    }

    function signOut(){
      currentUser.id= undefined;
      $state.go('signin');
    }
  });
})();
