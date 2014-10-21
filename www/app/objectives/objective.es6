(function() {
  class Objective {
    constructor({title, level, points, description}){
      this.title = title;
      this.level = level;
      this.points = points || 0;
      this.description = description || "";
    }

    get id(){
      let level = this.generateLevel(this.level);
      let title = this.generateTitle(this.title);
      return `${level}_${title}`;
    }

    generateTitle(title){
      return title.split(" ").join("_");
    }

    generateLevel(level){
      if(level < 10){
        return `00${level}`;
      } else if(level < 100){
        return `0${level}`;
      } else {
        return this.level;
      }
    }
  }

  var app = angular.module('unacademic');
  app.service('Objective', function() {
    return Objective;
  });
})();
