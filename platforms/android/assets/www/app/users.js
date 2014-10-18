(function(){

  app = angular.module('unacademic');

  var testUser = {};

  var profile = {
    id: 'yeehaa123',
    name: {
      first: 'Jan Hein',
      last: 'Hoogstad'
    },
    avatar_url: 'http://calitreview.com/images/Rembrandt_Sheet%20of%20Studies%20with%20Self-Portrait_Rijksmuseum_7.jpg',
    portrait_url: 'https://avatars.githubusercontent.com/u/1780358?v=2',
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
