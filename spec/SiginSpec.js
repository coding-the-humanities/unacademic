describe("Signin Controller", function () {

  var ctrl, $timeout;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      vm = $controller("Signin", {
        currentUser: {},
        authentication: {}
      });
    });
  });
});
