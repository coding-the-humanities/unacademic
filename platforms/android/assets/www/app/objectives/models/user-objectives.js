(function(){

  var app = angular.module('unacademic.objectives');

  app.service('userObjectives', function(users, $q, objectives){

    return {
      getAllObjectives: getAllObjectives,
      getObjective: getObjective
    };

    function getAllObjectives(userId){
      var deferred = $q.defer();
      var allObjectives;

      var userObjectives = users.getUser(userId).objectives;
      var keys = Object.keys(userObjectives);

      objectives.getObjectives().then(function(data){
        allObjectives = data;
        keys.forEach(function(key){
          allObjectives[key].added = true;
        });
        deferred.resolve(allObjectives);
      });

      return deferred.promise;
    }

    function getObjective(userId, objectiveId){
      var deferred = $q.defer();
      var allObjectives;
      var userObjective = users.getUser(userId).objectives[objectiveId];
      var keys = Object.keys(userObjective);

      objectives.getObjectives().then(function(data){
        allObjectives = data;
        var objective = allObjectives[objectiveId];
        keys.forEach(function(key){
          objective[key] = userObjective[key];
        });
        deferred.resolve(objective);
      });
      return deferred.promise;
    }
  });
})();
