(function() {
  class Objective {
    constructor({title, level, category, points, description, tasks, resources}){
      this.title = title;
      this.level = level;
      this.points = points || 0;
      this.tasks = tasks;
      this.description = description || "";
      this.baseUrl = this.generateBaseUrl(this.title);
      this.url = this.generateUrl(this.baseUrl);
      this.categories = {
        "design":   "assertive",
        "markup":   "positive",
        "data":     "balanced",
        "workflow": "energized",
        "general":  "dark"
      };
      this.completion = 70,
      this.category = this.checkCategory(category);
      this.color = `${this.categories[this.category]}`;
    };

    get id(){
      let level = this.generateLevel(this.level);
      let title = this.generateTitle(this.title);
      return `${level}_${title}`;
    }

    checkCategory(category){
      var allowedCategories = Object.keys(this.categories);
      return allowedCategories.find((c) => c === category);
    }

    generateUrl(url){
      return `${url}/logo.svg`
    }

    generateBaseUrl(rawTitle){
      let title = this.generateTitle(rawTitle).toLowerCase();
      return `img/objectives/${title}`;
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
