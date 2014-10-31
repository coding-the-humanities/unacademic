(function(){

  app = angular.module('unacademic');

  app.service('User', function($q, objectives){

    function User(user){
      this.profile = user.profile;
      this.profile.name.full = this.profile.name.first + " " + this.profile.name.last;
      this.objectives = user.objectives;
    }

    User.prototype.markObjectiveCompleted = function(id){
      this.objectives[id].completed = new Date();
    };

    User.prototype.addObjective = function(id){
      var deferred = $q.defer();
      var self = this;
      objectives.getObjectives2().then(function(allObjectives){
        var objective = allObjectives[id];
        console.log(objective.id);
        objective.started = new Date();
        objective.completed = false;
        self.objectives[id] = objective;
        deferred.resolve(objective);
      });
      return deferred.promise;
    };

    User.prototype.removeObjective = function(id){
      delete this.objectives[id];
    };

    return User;
  });
})();
