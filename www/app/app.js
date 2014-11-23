(function(){
  var app = angular.module('unacademic', [
    'templates',
    'ionic',
    'firebase',
    'angular.filter',
    'unacademic.authentication',
    'unacademic.users',
    'unacademic.places',
    'unacademic.userplaces',
    'unacademic.news',
    'unacademic.tasks',
    'unacademic.cards'
  ]);

  app.value('FIREBASE_REF','https://mobile-app.firebaseio.com/');
  app.value('session', {});
  app.constant('faker', faker);
  app.constant('_', _);

  app.run(function($ionicPlatform, User, $rootScope, session, $state) {
    $ionicPlatform.ready(function() {

      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

    $rootScope.$on('$firebaseSimpleLogin:login', function(event, user) {
      console.log(user);
    });

    $rootScope.$on('$firebaseSimpleLogin:error', function(event, error) {
      console.log('Error logging user in: ', error);
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function(event) {
    });

    if(!session.user){
      profile = {
        name: {
          first: "hello",
          last: "world"
        },
        id: "123"
      };
      session.user = new User({profile: profile, places: {}});
      // $state.go('signin');
    }
  });

  app.controller('App', function(){
    var vm = this;
  });
})();
