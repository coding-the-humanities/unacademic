(function(){
  var app = angular.module('unacademic');

  var user = {};

  var profile = {
    id: 'yeehaa123',
    name: {
      first: 'Jan Hein',
      last: 'Hoogstad'
    },
    avatar_url: '',
    portrait_url: '',
    student_number: '123456789',
    level: 100,
    study: 'Philosophy',
    role: 'admin',
    objectives: {
      '000_html': {
        completed: true
      },
      '000_css': {
        completed: false
      },
      '000_gists': {
        completed: true
      },
      '000_user_camera_study': {
        completed: false
      }

    }
  };

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

  profile.name.full = profile.name.first + " " + profile.name.last;

  app.controller('Profile', function(){

    var vm = this;

    vm.pageTitle = "Profile";
    vm.profile = undefined;
    vm.objectives = undefined;

    user.profile = profile;
    user.objectives = objectives;

    vm.signIn = function(){
      vm.profile = user.profile;
      var userObjectives = user.profile.objectives;
      var keys = Object.keys(userObjectives);
      vm.objectives = keys.map(function(objective){
        var newObjective = objectives[objective];
        var userObjective = userObjectives[objective];
        newObjective.completed = userObjective.completed;
        return newObjective;
      });
    };

    vm.signOut = function(){
      vm.profile = undefined;
      vm.objectives = undefined;
    };

    return vm;
  });
})();
