(function(){

  var app = angular.module('unacademic.objectives');

  app.service('userPlaces', function(users, $q, places){

    return {
      getAllObjectives: getAll,
      getObjective: get,
      getAll: getAll,
      get: get,
    };

    function getAll(userId){
      var deferred = $q.defer();

      $q.all([users.getUser(), places.getAll()]).then(function(data){
        var userPlaces = data[0].objectives;
        var keys = Object.keys(userPlaces);
        var allPlaces = data[1];
        keys.forEach(function(key){
          allPlaces[key].added = true;
        });
        deferred.resolve(allPlaces);
      });


      return deferred.promise;
    }

    function get(user, objectiveId){
      var deferred = $q.defer();

      places.getAll().then(function(data){
        var userPlace = user.objectives[objectiveId];
        var keys = Object.keys(userPlace);
        var allPlaces = data;
        var objective = allPlaces[objectiveId];
        keys.forEach(function(key){
          objective[key] = userPlace[key];
        });
        deferred.resolve(objective);
      });

      return deferred.promise;
    }
  });
})();
