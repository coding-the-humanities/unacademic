describe("Profile Controller", function () {

  var ctrl, $timeout;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      vm = $controller("Profile", {
        currentUser: {}
      });
    });
  });
});
