(function(){

  var app = angular.module('unacademic');

  app.service('objectives', function($http, $q, Objective){
    return {
      getObjectives2: getObjectives2
    };

    function getObjectives2(){
      var deferred = $q.defer();
      $http.get('./api/objectives.json').success(function(data){
        var objectives = {};
        var keys = Object.keys(data);
        keys.forEach(function(key){
          objectives[key] = new Objective(data[key]);
        });
        deferred.resolve(objectives);
      });
      return deferred.promise;
    }
  });
})();
