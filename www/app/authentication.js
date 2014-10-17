(function(){
  var app = angular.module('unacademic');

  app.service('authentication', function(users, currentUser){
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
      return profile;
    }

    function getCurrentUserObjectives(){
      return currentUser.objectives;
    }

    function signIn(){
      currentUser.id = "yeehaa123";
      var user = users.getUser(currentUser.id);
      currentUser.profile = user.profile;
      currentUser.objectives= user.objectives;
    }

    function signOut(){
      currentUser.id= undefined;
      currentUser.profile = undefined;
      currentUser.objectives = undefined;
    }
  });
})();
