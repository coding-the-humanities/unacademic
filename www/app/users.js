(function(){

  app = angular.module('unacademic');

  var testUser = {};

  var profile = {
    id: 'yeehaa123',
    name: {
      first: 'Jan Hein',
      last: 'Hoogstad'
    },
    avatar_url: 'img/avatar.jpg',
    portrait_url: 'img/yeehaa.jpg',
    student_number: 123456789,
    level: 100,
    study: 'Philosophy',
    role: 'admin'
  };

  var objectives = {};

  profile.name.full = profile.name.first + " " + profile.name.last;
  testUser.profile = profile;
  testUser.objectives = objectives;

  app.service('users', function(User){
    return {
      getUser: function(){
       var user = new User(testUser);
       // Remove: Only for bootstrapping
       user.addObjective('000_HTML');
       user.addObjective('000_CSS');

       return user;
      }
    };
  });
})();
