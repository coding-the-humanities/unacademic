(function(){
  var app = angular.module('unacademic.authentication');

  app.service('authentication', function($q, users, $state, session){
    return {
      signIn: signIn,
      signOut: signOut
    };

    function signIn(){
      var deferred = $q.defer();
      users.getUser('Beryl20').then(function(user){
        session.user = user;
        $state.go('app.userplaces.index');
        deferred.resolve();
      });

      return deferred.promise;
    }

    function signOut(){
      session.user = undefined;
      $state.go('signin');
    }
  });
})();
