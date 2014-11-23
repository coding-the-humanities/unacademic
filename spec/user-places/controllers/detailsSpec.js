(function(){
  describe("Details Controller", function () {

    var ctrl, $timeout, place;

    beforeEach(function () {

      module("unacademic.userplaces");

      inject(function ($rootScope, $controller, $q, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;

        place = $controller("Details", {
          place: {
            title: "HTML"
          }
        });
      });
    });

    it("sets the place", function(){
      expect(place.title).toBeDefined();
    });


    it("shows the description by default", function(){
      expect(place.showDescription).toBeFalsy();
    });

    it("hides the description by default", function(){
      expect(place.tasks).toBeFalsy();
    });
  });
})();
