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

    $stateProvider.state('app.objectives.detail', {
      url: '/:objectiveId',
      templateUrl: 'app/objectives/views/objectives-detail.html',
      controller: "ObjectiveDetails as objective",
      resolve: {
        objective: function($stateParams, $q, userObjectives, currentUser, Objective){
          var deferred = $q.defer();
          var objectiveId = $stateParams.objectiveId;

          userObjectives.getObjective(currentUser.id, objectiveId).then(function(data){
            var objective = new Objective(data);
            deferred.resolve(objective);
          });
          return deferred.promise;
        }
      }
    });

    $stateProvider.state('app.objectives.edit', {
      url: '/edit',
      templateUrl: 'app/objectives/views/edit-objectives.html',
      controller: "EditObjectives as objectives",
      resolve: {
        objectives: function(userObjectives, currentUser){
          return userObjectives.getAllObjectives(currentUser.id);
        }
      }
    });
  });
})();
