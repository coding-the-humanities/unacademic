(function(){

  var app = angular.module('unacademic');

  var tasks = [
    {
      title: "Clean Up"
    },
    {
      title: "Tidy Up"
    },
    {
      title: "Do Dishes"
    },
    {
      title: "Make the Bed"
    }
  ];

  var o = [
    {
      level: 0,
      title: "HTML",
      category: "markup"
    },
    {
      level: 0,
      title: "CSS",
      category: "design"
    },
    {
      level: 0,
      title: "Gists",
      category: "workflow"
    },
    {
      level: 0,
      title: "User Camera Study",
      category: "general"
    },
    {
      title: "simple script",
      level: 2,
      category: "behavior"
    },
    {
      title: "code organization",
      level: 2,
      category: "workflow"
    },
    {
      title: "modularization",
      level: 2
    },
    {
      title: "git",
      level: 3,
      category: "workflow"
    },
    {
      title: "api's",
      level: 4,
      category: "data"
    },
    {
      title: "persistance",
      level: 4,
      category: "data"
    },
    {
      title: "forms",
      level: 5
    },
    {
      title: "real time",
      level: 5
    }
  ];

  var objectives = {};

  o.forEach(function(objective){

    var level;

    if(objective.level < 10){
      level = "00" + objective.level;
    } else if(objective.level < 100){
      level = "0" + objective.level;
    } else {
      level = objective.level;
    }

    var assignments = _.cloneDeep(tasks);
    objective.tasks = assignments.map(function(task){
      var random = function(){
        var rand = Math.random() < 0.5;
        return rand;
      };

      if(random()){
        task.completed = true;
      } else {
        task.completed = false;
      }
      return task;
    });
    objective.id = level + "_"  + objective.title;
    objectives[objective.id] = objective;
  });



  app.service('objectives', function(Objective){
    return {
      getObjectives: function(){
        return objectives;
      }
    };
  });
})();
