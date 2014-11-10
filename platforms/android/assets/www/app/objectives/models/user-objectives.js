(function(){

  var app = angular.module('unacademic.objectives');

  app.service('userObjectives', function(users, $q, objectives){

    return {
      getAllObjectives: getAllObjectives,
      getObjective: getObjective
    };

    function getAllObjectives(userId){
      var deferred = $q.defer();

      $q.all([users.getUser(), objectives.getObjectives()]).then(function(data){
        var userObjectives = data[0].objectives;
        var keys = Object.keys(userObjectives);
        var allObjectives = data[1];
        keys.forEach(function(key){
          allObjectives[key].added = true;
        });
        deferred.resolve(allObjectives);
      });


      return deferred.promise;
    }

    function getObjective(user, objectiveId){
      var deferred = $q.defer();

      objectives.getObjectives().then(function(data){
        var userObjective = user.objectives[objectiveId];
        var keys = Object.keys(userObjective);
        var allObjectives = data;
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
