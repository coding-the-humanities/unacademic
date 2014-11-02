(function(){
  var app = angular.module('unacademic');
  app.directive('cardHeader', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/common/cards/card-header.html',
      controller: function($scope){
        $scope.headerColor = 'item-' + $scope.color;
        $scope.titleColor = 'light';
      },
      scope: {
        title: '@',
        logo: '@',
        color: '@'
      },
      replace: true
    };
  });
})();
