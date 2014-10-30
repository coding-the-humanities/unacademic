(function(){

  app = angular.module('unacademic');

  app.service('User', function(objectives){

    function User(user){
      this.profile = user.profile;
      this.profile.name.full = this.profile.name.first + " " + this.profile.name.last;
      this.objectives = user.objectives;
    }

    User.prototype.markObjectiveCompleted = function(id){
      this.objectives[id].completed = new Date();
    };

    User.prototype.addObjective = function(id){
      var allObjectives = objectives.getObjectives();
      var objective = allObjectives[id];
      objective.started = new Date();
      objective.completed = false;
      this.objectives[id] = objective;
    };

    User.prototype.removeObjective = function(id){
      delete this.objectives[id];
    };

    return User;
  });
})();
