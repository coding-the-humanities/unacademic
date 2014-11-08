(function(){
  var app = angular.module('unacademic.tasks');
  app.directive('taskItem', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/tasks/views/task-item.html',
      controller: function($scope){
        $scope.buttonColor = "button-" + $scope.color;
      },
      scope: {
        task: '=',
        color: '@'
      },
      replace: true
    };
  });
})();
