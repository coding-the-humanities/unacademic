(function(){
  var app = angular.module('unacademic.users');

  app.config(function($stateProvider) {

    $stateProvider.state('app.users', {
      url: '/users',
      templateUrl: 'app/users/views/users.html',
      controller: "Users as users",
      resolve: {
        users: function($q, $http, users){
          var deferred = $q.defer();
          $http.get('api/users.json').then(function(response){
            deferred.resolve(response.data);
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
