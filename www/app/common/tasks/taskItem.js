(function(){
  var app = angular.module('unacademic');
  app.directive('taskItem', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/common/tasks/taskItem.html',
      controller: function($scope){
        $scope.checkboxColor = "checkbox-" + $scope.color;
      },
      scope: {
        task: '=',
        color: '@'
      },
      replace: true
    };
  });
})();
