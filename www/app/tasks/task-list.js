(function(){
  var app = angular.module('unacademic.tasks');
  app.directive('taskList', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/tasks/views/task-list.html',
      scope: {
        tasks: '=',
        color: '@'
      },
      replace: true
    };
  });
})();
