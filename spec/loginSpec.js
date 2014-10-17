describe("Login Controller", function () {

  var ctrl, $timeout;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      vm = $controller("Login");
    });
  });

  describe("authentication", function(){

    describe("on sign in", function(){
    });
  });
});
