(function(){

  var app = angular.module('unacademic.users');

  app.service('users', function($q, User, faker, _){
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

    var roles = ['dwarf', 'troll', 'mage', 'witch'];
    var studies = ['Philosophy', 'Musicology', 'History', 'Dutch'];

    var objectives = {};

    profile.name.full = profile.name.first + " " + profile.name.last;
    testUser.profile = profile;
    testUser.objectives = objectives;

    return {
      getUser: function(){
       var user = new User(testUser);
       return user;
      },
    };


    function generateUsers(){
      var users = [];
      var newUser = {};
      var profile;

      for(var i = 20; i < 40; i++){
        newUser.profile = generateProfile(i);
        newUser.objectives = {};
        var user = new User(newUser);
        users.push(user);
      }

      return users;
    }

    function generateProfile(index){
      var profile = {
        name: {
          first: faker.name.firstName(),
          last: faker.name.lastName(),
        },
        avatar_url: faker.internet.avatar(),
        student_number: index,
        role: _.sample(roles),
        study: _.sample(studies)
      };

      profile.id = profile.name.first + index;
      profile.portrait_url = profile.avatar_url;

      return profile;
    }
  });
})();
