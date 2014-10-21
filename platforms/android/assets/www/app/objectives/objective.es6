(function() {
  class Objective {
    constructor({title, level}){
    this.title = title;
    this.level = level;
  }

   get id(){
     let level = this.generateLevel(this.level);
     return `${level}_${this.title}`;
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
