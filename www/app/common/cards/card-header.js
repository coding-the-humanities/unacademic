(function(){
  var app = angular.module('unacademic');
  app.directive('cardHeader', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/common/cards/card-header.html',
      scope: {
        title: '@',
        logo: '@',
        color: '@'
      },
      replace: true
    };
  });
})();
