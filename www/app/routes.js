(function(){
  var app = angular.module('unacademic');

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
      url: '',
      abstract: true,
      templateUrl: './app/home.html',
      controller: 'App as app'
    });

  });
})();
