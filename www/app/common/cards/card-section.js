(function(){
  var app = angular.module('unacademic');
  app.directive('cardSection', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/common/cards/card-section.html',
      controller: function($scope){
        $scope.headerColor = function(sectionState){
          if(sectionState){
            return "item-" + $scope.color;
          }
          return "item-light";
        };
      },
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
