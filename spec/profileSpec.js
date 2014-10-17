xdescribe("Profile Controller", function () {

  var userSession, ctrl, $timeout;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      vm = $controller("Profile");
    });
  });

  describe("authentication", function(){

    describe("on sign in", function(){
      it("gets the user profile", function() {
        expect(vm.profile).not.toBeDefined();
        vm.signIn();
        expect(vm.profile).toBeDefined();
      });
    });

    describe("on sign out", function(){
      beforeEach(function(){
        vm.signIn();
        vm.signOut();
      });

      it("removes the users profile from the vm", function() {
        expect(vm.profile).not.toBeDefined();
      });
    });
  });
});
