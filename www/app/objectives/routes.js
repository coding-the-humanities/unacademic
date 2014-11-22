(function(){
  var app = angular.module('unacademic.objectives');

  app.config(function($stateProvider) {
    $stateProvider.state('app.objectives', {
      url: '/objectives',
      abstract: true,
      templateUrl: 'app/objectives/views/places.html'
    });

    $stateProvider.state('app.objectives.user', {
      url: '/user',
      abstract: true,
      templateUrl: 'app/objectives/views/places.html'
    });

    $stateProvider.state('app.objectives.user.index', {
      url: '/index',
      templateUrl: 'app/objectives/views/user-places.html',
      controller: "UserPlaces as places"
    });

    $stateProvider.state('app.objectives.user.edit', {
      url: '/edit',
      templateUrl: 'app/objectives/views/edit-user-places.html',
      controller: "EditUserPlaces as places",
      resolve: {
        places: function(userPlaces){
          return userPlaces.getAll();
        }
      }
    });

    $stateProvider.state('app.objectives.add', {
      url: '/add',
      templateUrl: 'app/objectives/views/add-objective.html',
      controller: "AddObjective as objectives",
      resolve: {
        objectives: function(userPlaces){
          return userPlaces.getAll();
        }
      }
    });

    $stateProvider.state('app.objectives.new', {
      url: '/new',
      templateUrl: 'app/objectives/views/new-objective.html',
      controller: "AddObjective as objectives",
      resolve: {
        objectives: function(userPlaces){
          return userPlaces.getAll();
        }
      }
    });

    $stateProvider.state('app.objectives.detail', {
      url: '/:objectiveId',
      templateUrl: 'app/objectives/views/objectives-detail.html',
      controller: "ObjectiveDetails as objective",
      resolve: {
        objective: function($stateParams, $q, userPlaces, session, Place){
          var deferred = $q.defer();
          var objectiveId = $stateParams.objectiveId;

          userPlaces.get(session.user, objectiveId).then(function(data){
            var place = new Place(data);
            deferred.resolve(place);
          });
          return deferred.promise;
        }
      }
    });

  });
})();
