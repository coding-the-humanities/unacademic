(function() {
  let fakeDesc = {
    full: `Four loko leggings lomo biodiesel roof party, brunch umami banjo cray keytar mustache 90's Neutra Blue Bottle. Normcore roof party cornhole whatever selvage fap. Hella flannel narwhal wolf, mumblecore meh Blue Bottle Wes Anderson heirloom fanny pack Portland. Sustainable banh mi tote bag, fap try-hard Marfa deep v ethical tattooed tousled quinoa.`,
   summary: `Four loko leggings lomo biodiesel roof party, brunch umami banjo cray keytar mustace`
  }

  class Objective {
    constructor({title, level, category, points, description, tasks, resources}){
      this.title = title;
      this.level = level;
      this.points = points || 0;
      this.tasks = tasks;
      this.description = fakeDesc || "";
      this.baseUrl = this.generateBaseUrl(this.title);
      this.url = this.generateUrl(this.baseUrl);
      this.categories = {
        "design":   "assertive",
        "markup":   "positive",
        "data":     "balanced",
        "workflow": "energized",
        "general":  "dark"
      };
      this.category = this.checkCategory(category);
      this.color = `item-${this.categories[this.category]}`;
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
