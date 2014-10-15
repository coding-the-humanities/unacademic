describe("Profile Controller", function () {

  var userSession, ctrl, $timeout;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      vm = $controller("Profile", {
      });
    });
  });

  describe("authentication", function(){

    describe("on sign in", function(){
      it("gets the user profile", function() {
        expect(vm.profile).not.toBeDefined();
        vm.signIn();
        expect(vm.profile).toBeDefined();
      });

      it("gets the user objectives", function() {
        expect(vm.objectives).not.toBeDefined();
        vm.signIn();
        expect(vm.objectives).toBeDefined();
      });

    });

    describe("on sign in", function(){
      beforeEach(function(){
        vm.signIn();
        vm.signOut();
      });

      it("erases the users profile", function() {
        expect(vm.profile).not.toBeDefined();
      });

      it("erases the users objective", function() {
        expect(vm.objectives).not.toBeDefined();
      });
    });
  });
});
