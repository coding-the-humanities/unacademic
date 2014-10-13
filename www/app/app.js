(function(){
  var app = angular.module('unacademic', [
    'ionic',
    'firebase'
  ]);

  app.value('FIREBASE_REF','https://mobile-app.firebaseio.com/')
  app.value('userSession',{});

  app.run(function($ionicPlatform, $rootScope, userSession) {
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
  })
})();
