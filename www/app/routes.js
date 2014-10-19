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
          templateUrl: './app/objectives/objectives.html'
        }
      }
    });

    $stateProvider.state('app.objectives.user', {
      url: '/user',
      templateUrl: './app/objectives/user-objectives.html',
      controller: "UserObjectives as objectives"
    });

    $stateProvider.state('app.objectives.detail', {
      url: '/:objectiveId',
      templateUrl: './app/objectives/objectives-detail.html',
      controller: "ObjectiveDetails as objective",
      resolve: {
        objective: function($stateParams, userObjectives, currentUser){
          var objectiveId = $stateParams.objectiveId;
          return userObjectives.getObjective(currentUser.id, objectiveId);
        }
      }
    });

    $stateProvider.state('app.objectives.edit', {
      url: '/edit',
      templateUrl: './app/objectives/edit-objectives.html',
      controller: "EditObjectives as objectives",
      resolve: {
        objectives: function(userObjectives, currentUser){
          return userObjectives.getAllObjectives(currentUser.id);
        }
      }
    });
  });
})();
