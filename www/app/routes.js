(function(){
  var app = angular.module('unacademic');

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('app', {
      url: '/',
      templateUrl: './app/home.html'
    });

    $stateProvider.state('app.profile', {
      url: '/profile',
      views: {
        profile: {
          templateUrl: './app/profile.html',
          controller: "Profile as vm"
        }
      }
    });

    $stateProvider.state('app.objectives', {
      url: '/objectives',
      views: {
        objectives: {
          templateUrl: './app/objectives.html',
          controller: "Profile as vm"
        }
      }
    });
  });
})();
