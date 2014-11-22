(function(){
  describe("Profile Controller", function () {

    var ctrl, $timeout;

    beforeEach(function () {

      module("unacademic.users");

      inject(function ($rootScope, $controller, $q, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;

        vm = $controller("Profile", {
          currentUser: {},
          authentication: {}
        });
      });
    });
  });

})();

