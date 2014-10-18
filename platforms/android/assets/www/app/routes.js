(function(){
  var app = angular.module('unacademic');

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('signin', {
      url: '/',
      templateUrl: './app/signin.html',
      controller: "Signin as vm"
    });

    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: './app/home.html',
      resolve: {
        user: function(currentUser, users){
          var user = users.getUser(currentUser.id);
          return user;
        }
      }
    });

    $stateProvider.state('app.profile', {
      url: '/profile',
      views: {
        profile: {
          templateUrl: './app/profile.html',
          controller: "Profile as user",
        }
      }
    });

    $stateProvider.state('app.objectives', {
      url: '/objectives',
      abstract: true,
      views: {
        objectives: {
          templateUrl: './app/objectives.html'
        }
      }
    });

    $stateProvider.state('app.objectives.user', {
      url: '/user',
      templateUrl: './app/user-objectives.html',
      controller: "UserObjectives as objectives"
    });

    $stateProvider.state('app.objectives.edit', {
      url: '/edit',
      templateUrl: './app/edit-objectives.html',
      controller: "EditObjectives as objectives",
      resolve: {
        objectives: function(objectives){
          return objectives.getObjectives();
        }
      }
    });
  });
})();
