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
    role: 'admin'
  };

  profile.name.full = profile.name.first + " " + profile.name.last;

  var objectives = [];

  app.controller('Profile', function(){

    var vm = this;

    vm.pageTitle = "Profile";
    vm.profile = undefined;
    vm.objectives = undefined;

    user.profile = profile;
    user.objectives = objectives;

    vm.signIn = function(){
      vm.profile = user.profile;
      vm.objectives = user.objectives;
    };

    vm.signOut = function(){
      vm.profile = undefined;
      vm.objectives = undefined;
    };

    return vm;
  });
})();
