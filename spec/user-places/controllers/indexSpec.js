(function(){
  describe("UserPlaces Controller", function () {

    var ctrl, $timeout, vm;

    beforeEach(function () {

      module('unacademic.userplaces');

      inject(function ($rootScope, $controller, $q, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;

        userPlaces = $controller("Index", {
          authentication: {},
          session: {
            user: {
              places: {}
            }
          }
        });
      });
    });

    it("sets the userPlaces", function(){
      expect(userPlaces.all).toBeDefined();
    });

    it("knows if it is empty", function(){
      expect(userPlaces.empty()).toBeTruthy();
      userPlaces.all.something = "bla";
      expect(userPlaces.empty()).toBeFalsy();
    });

  });
})();
