(function(){
  var app = angular.module('unacademic', [
    'templates',
    'ionic',
    'firebase',
    'angular.filter',
    'unacademic.authentication',
    'unacademic.users',
    'unacademic.objectives',
    'unacademic.news',
    'unacademic.tasks',
    'unacademic.cards'
  ]);

  app.value('FIREBASE_REF','https://mobile-app.firebaseio.com/');
  app.value('userSession',{});
  app.value('session',{});
  app.value('profile',{});
  app.constant('faker', faker);
  app.constant('_', _);

  app.run(function($ionicPlatform, $rootScope, session, $state) {
    $ionicPlatform.ready(function() {

      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

    if(!session.user){
      $state.go('signin');
    }

    $rootScope.$on('$firebaseSimpleLogin:login', function(event, user) {
      console.log(user);
    });

    $rootScope.$on('$firebaseSimpleLogin:error', function(event, error) {
      console.log('Error logging user in: ', error);
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function(event) {
    });
  });
})();
