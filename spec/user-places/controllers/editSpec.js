(function(){
  describe("Edit Places Controller", function () {

    var $timeout, places, addPlaceToUser;

    beforeEach(function () {

      module("unacademic.userplaces");

      inject(function ($rootScope, $controller, $q, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;

        mockUser = {
          addPlace: function(){},
          removePlace: function(){}
        };

        addPlaceToUser = spyOn(mockUser, 'addPlace');
        removePlaceFromUser = spyOn(mockUser, 'removePlace');

        places = $controller("EditUserPlaces", {
          authentication: {},
          places: {
            '000_HTML': {}
          },
          $state: {},
          $ionicActionSheet: {},
          session: {
            user: mockUser
          }
        });
      });
    });

    it("sets the places", function(){
      expect(places.all).toBeDefined();
    });

    describe('add', function(){
      var place;
      var key;

      beforeEach(function(){
        key = '000_HTML';
        places.add(key);
        place = places.all[key];
      });

      it("changes the added property to true on the place", function(){
        expect(place.added).toBeTruthy();
      });

      it("add the place to the user", function(){
        expect(addPlaceToUser).toHaveBeenCalledWith(key);
      });
    });

    describe('remove', function(){
      var place;
      var key;

      beforeEach(function(){
        key = '000_HTML';
        places.remove(key);
        place = places.all[key];
      });

      it("changes the added property to false on the place", function(){
        expect(place.added).toBeFalsy();
      });

      it("add the place to the user", function(){
        expect(removePlaceFromUser).toHaveBeenCalledWith(key);
      });
    });
  });
})();

