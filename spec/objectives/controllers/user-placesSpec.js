(function(){
  describe("UserPlaces Controller", function () {

    var ctrl, $timeout, vm;

    beforeEach(function () {

      module('unacademic.objectives');

      inject(function ($rootScope, $controller, $q, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;

        objectives = $controller("UserPlaces", {
          authentication: {},
          session: {
            user: {
              objectives: {}
            }
          }
        });
      });
    });

    it("sets the objectives", function(){
      expect(objectives.all).toBeDefined();
    });

    it("knows if it is empty", function(){
      expect(objectives.empty()).toBeTruthy();
      objectives.all.something = "bla";
      expect(objectives.empty()).toBeFalsy();
    });

  });
})();
