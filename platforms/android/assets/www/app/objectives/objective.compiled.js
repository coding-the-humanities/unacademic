"use strict";
(function() {
  var Objective = function Objective($__1) {
    var $__2 = $__1,
        title = $__2.title,
        level = $__2.level;
    this.title = title;
    this.level = level;
  };
  ($traceurRuntime.createClass)(Objective, {
    get id() {
      var level = this.generateLevel(this.level);
      return (level + "_" + this.title);
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
