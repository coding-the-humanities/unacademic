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
            return deferred.resolve(users);
          });
          return deferred.promise;
        }
      }
    });

    $stateProvider.state('app.profile', {
      url: '/profile/:id',
      templateUrl: 'app/users/views/profile.html',
      controller: "Profile as user",
      resolve: {
        user: function($q, users, $stateParams){
          var deferred = $q.defer();
          users.getUser($stateParams.id).then(function(user){
            deferred.resolve(user);
          });
          return deferred.promise;
        }
      }
    });


    $stateProvider.state('app.myProfile', {
      url: '/profile',
      templateUrl: 'app/users/views/profile.html',
      controller: "Profile as user",
      resolve: {
        user: function(session){
          return session.user;
        }
      }
    });
  });
})();
