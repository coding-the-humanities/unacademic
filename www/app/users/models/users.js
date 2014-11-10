(function(){

  var app = angular.module('unacademic.users');

  app.service('users', function($q, $http, User){

    return {
      getUser: getUser,
      getUsers: getUsers
    };

    function getUser(){
      var deferred = $q.defer();
      getUsers().then(function(users){
        var user = users[1];
        deferred.resolve(user);
      });
      return deferred.promise;
    }

    function getUsers(){
      var deferred = $q.defer();
      $http.get('api/users.json').then(function(response){
        var users = response.data.map(function(user){
          return new User(user);
        });
        deferred.resolve(users);
      });
      return deferred.promise;
    }

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
