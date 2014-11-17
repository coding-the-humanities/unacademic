(function(){
  var app = angular.module('unacademic.objectives');

  app.config(function($stateProvider) {
    $stateProvider.state('app.objectives', {
      url: '/objectives',
      abstract: true,
      templateUrl: 'app/objectives/views/objectives.html'
    });

    $stateProvider.state('app.objectives.user', {
      url: '/user',
      templateUrl: 'app/objectives/views/user-objectives.html',
      controller: "UserObjectives as objectives"
    });

    $stateProvider.state('app.objectives.edit', {
      url: '/edit',
      templateUrl: 'app/objectives/views/edit-user-objectives.html',
      controller: "EditUserObjectives as objectives",
      resolve: {
        objectives: function(userObjectives){
          return userObjectives.getAllObjectives();
        }
      }
    });

    $stateProvider.state('app.objectives.add', {
      url: '/add',
      templateUrl: 'app/objectives/views/add-objective.html',
      controller: "AddObjective as objectives",
      resolve: {
        objectives: function(userObjectives){
          return userObjectives.getAllObjectives();
        }
      }
    });

    $stateProvider.state('app.objectives.new', {
      url: '/new',
      templateUrl: 'app/objectives/views/new-objective.html',
      controller: "AddObjective as objectives",
      resolve: {
        objectives: function(userObjectives){
          return userObjectives.getAllObjectives();
        }
      }
    });

    $stateProvider.state('app.objectives.detail', {
      url: '/:objectiveId',
      templateUrl: 'app/objectives/views/objectives-detail.html',
      controller: "ObjectiveDetails as objective",
      resolve: {
        objective: function($stateParams, $q, userObjectives, session, Objective){
          var deferred = $q.defer();
          var objectiveId = $stateParams.objectiveId;

          userObjectives.getObjective(session.user, objectiveId).then(function(data){
            var objective = new Objective(data);
            deferred.resolve(objective);
          });
          return deferred.promise;
        }
      }
    });

  });
})();
