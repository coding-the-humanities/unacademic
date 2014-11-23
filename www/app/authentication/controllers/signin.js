(function(){
  var app = angular.module('unacademic');


  app.controller('Signin', function(User, authentication, session){

    var vm = this;

    vm.pageTitle = "Sign in";
    vm.user = session.user;
    console.log(JSON.stringify(generateUsers()));

    vm.signIn = function(){
      authentication.signIn();
    };

    return vm;
    function generateUsers(){
      var users = {};
      var newUser = {};
      var profile;
      var user;

      for(var i = 20; i < 40; i++){
        newUser.profile = generateProfile(i);
        newUser.places = {};
        user = new User(newUser);
        users[user.profile.id] = user;
      }

      return users;
    }

    function generateProfile(index){
      var roles = ['dwarf', 'troll', 'mage', 'witch'];
      var studies = ['Philosophy', 'Musicology', 'History', 'Dutch'];
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
