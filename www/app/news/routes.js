(function(){
  var app = angular.module('unacademic.news');

  app.config(function($stateProvider) {

    $stateProvider.state('app.news', {
      url: '/news',
      templateUrl: 'app/news/views/news.html'
    });
  });
})();
