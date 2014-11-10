(function(){
  var app = angular.module('unacademic.users');

  app.config(function($stateProvider) {

    $stateProvider.state('app.users', {
      url: '/users',
      templateUrl: 'app/users/views/users.html',
      controller: "Users as users",
      resolve: {
        users: function($q, users){
          var deferred = $q.defer();
          users.getUsers().then(function(users){
            console.table(users);
            return deferred.resolve(users);
          });
          return deferred.promise;
        }
      }
    });

    $stateProvider.state('app.profile', {
      url: '/profile',
      templateUrl: 'app/users/views/profile.html',
      controller: "Profile as user",
    });
  });
})();
