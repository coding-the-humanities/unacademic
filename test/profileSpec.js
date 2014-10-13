describe("Unit Testing Examples", function () {

  var $scope, ctrl, $timeout;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      ctrl = $controller("profile", {
        $scope: $scope
      });
    });
  });

  it("should have a $scope variable", function() {
    expect($scope.hello).toBe();
  });
});
