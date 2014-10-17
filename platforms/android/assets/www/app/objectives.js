(function(){

  app = angular.module('unacademic');

  var objectives = {
    '000_html': {
      level: 0,
      title: "HTML"
    },
    '000_css': {
      level: 0,
      title: "CSS"
    },
    '000_gists': {
      level: 0,
      title: "Gists"
    },
    '000_user_camera_study': {
      level: 0,
      title: "User Camera Study"
    }
  };

  app.service('objectives', function(){
    return {
      getObjectives: function(){
        return objectives;
      }
    };
  });
})();
