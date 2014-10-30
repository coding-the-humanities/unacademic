(function(){
  var app = angular.module('unacademic');
  app.directive('cardSection', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/common/cards/card-section.html',
      scope: {
        title: '@',
        open: '@',
        color: '@'
      },
      transclude: true,
      replace: true
    };
  });
})();
