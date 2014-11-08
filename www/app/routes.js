(function(){
  var app = angular.module('unacademic');

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
      url: '',
      abstract: true,
      templateUrl: './app/home.html',
      resolve: {
        user: function(currentUser, users){
          var user = users.getUser(currentUser.id);
          return user;
        }
      }
    });

  });
})();
