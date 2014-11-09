(function(){
  var app = angular.module('unacademic.cards');

  app.directive('cardHeader', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/cards/card-header.html',
      scope: {
        title: '@',
        logo: '@',
        color: '@'
      },
      replace: true
    };
  });
})();
