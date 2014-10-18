(function(){

  app = angular.module('unacademic');

  var o = [
    {
      level: 0,
      title: "HTML"
    },
    {
      level: 0,
      title: "CSS"
    },
    {
      level: 0,
      title: "Gists"
    },
    {
      level: 0,
      title: "User Camera Study"
    },
    {
      title: "simple script",
      level: 2
    },
    {
      title: "code organization",
      level: 2
    },
    {
      title: "modularization",
      level: 2
    },
    {
      title: "git",
      level: 3
    },
    {
      title: "api's",
      level: 4
    },
    {
      title: "persistance",
      level: 4
    },
    {
      title: "forms",
      level: 5
    },
    {
      title: "real time",
      level: 5
    }
  ]

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

    objective.id = level + "_"  + objective.title;
    objectives[objective.id] = objective;
  });


  app.service('objectives', function(){
    return {
      getObjectives: function(){
        return objectives;
      }
    };
  });
})();
