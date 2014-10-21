"use strict";
(function() {
  var Objective = function Objective($__1) {
    var $__2 = $__1,
        title = $__2.title,
        level = $__2.level,
        points = $__2.points,
        description = $__2.description;
    this.title = title;
    this.level = level;
    this.points = points || 0;
    this.description = description || "";
  };
  ($traceurRuntime.createClass)(Objective, {
    get id() {
      var level = this.generateLevel(this.level);
      var title = this.generateTitle(this.title);
      return (level + "_" + title);
    },
    generateTitle: function(title) {
      return title.split(" ").join("_");
    },
    generateLevel: function(level) {
      if (level < 10) {
        return ("00" + level);
      } else if (level < 100) {
        return ("0" + level);
      } else {
        return this.level;
      }
    }
  }, {});
  var app = angular.module('unacademic');
  app.service('Objective', function() {
    return Objective;
  });
})();
