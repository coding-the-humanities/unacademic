(function(){
  describe("Add Place Controller", function () {

    var $timeout, places;

    beforeEach(function () {

      module("unacademic.places");

      inject(function ($rootScope, $controller, $q, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;

        mockUser = {
          addObjective: function(){},
          removeObjective: function(){}
        };

        places = $controller("Add", {
          authentication: {},
          places: {
            '000_HTML': {}
          },
          session: {
            user: mockUser
          }
        });
      });
    });

    it("sets the places", function(){
      expect(places.all).toBeDefined();
    });
  });

})();
