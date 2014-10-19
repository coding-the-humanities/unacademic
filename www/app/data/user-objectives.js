(function(){

  var app = angular.module('unacademic');

  app.service('userObjectives', function(users, objectives){
    var allObjectives;
    initialize();

    return {
      getAllObjectives: getAllObjectives,
      getObjective: getObjective
    };

    function getAllObjectives(userId){
      var userObjectives = users.getUser(userId).objectives;
      var keys = Object.keys(userObjectives);

      keys.forEach(function(key){
        allObjectives[key].added = true;
      });

      return allObjectives;
    }

    function getObjective(userId, objectiveId){
      var userObjective = users.getUser(userId).objectives[objectiveId];
      var objective = allObjectives[objectiveId];
      var keys = Object.keys(userObjective);
      keys.forEach(function(key){
        objective[key] = userObjective[key];
      });
      return objective;
    }

    function initialize(){
      allObjectives = objectives.getObjectives();
    }
  });
})();
