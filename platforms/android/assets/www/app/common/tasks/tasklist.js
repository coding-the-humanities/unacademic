(function(){
  var app = angular.module('unacademic');
  app.directive('tasklist', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/common/tasks/tasklist.html',
      scope: {
        tasks: '=',
        color: '@'
      },
      replace: true
    };
  });
})();
