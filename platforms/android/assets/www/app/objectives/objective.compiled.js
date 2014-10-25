"use strict";
(function() {
  var fakeDesc = {
    full: "Four loko leggings lomo biodiesel roof party, brunch umami banjo cray keytar mustache 90's Neutra Blue Bottle. Normcore roof party cornhole whatever selvage fap. Hella flannel narwhal wolf, mumblecore meh Blue Bottle Wes Anderson heirloom fanny pack Portland. Sustainable banh mi tote bag, fap try-hard Marfa deep v ethical tattooed tousled quinoa.",
    summary: "Four loko leggings lomo biodiesel roof party, brunch umami banjo cray keytar mustace"
  };
  var Objective = function Objective($__1) {
    var $__2 = $__1,
        title = $__2.title,
        level = $__2.level,
        points = $__2.points,
        description = $__2.description,
        tasks = $__2.tasks,
        resources = $__2.resources;
    this.title = title;
    this.level = level;
    this.points = points || 0;
    this.tasks = tasks;
    this.description = fakeDesc || "";
    this.baseUrl = this.generateBaseUrl(this.title);
    this.url = this.generateUrl(this.baseUrl);
  };
  ($traceurRuntime.createClass)(Objective, {
    get id() {
      var level = this.generateLevel(this.level);
      var title = this.generateTitle(this.title);
      return (level + "_" + title);
    },
    generateUrl: function(url) {
      return (url + "/logo.svg");
    },
    generateBaseUrl: function(rawTitle) {
      var title = this.generateTitle(rawTitle).toLowerCase();
      return ("img/objectives/" + title);
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
