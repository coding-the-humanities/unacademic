(function(){

  var userPlaces, scope, $rootScope, $q;

  describe("userPlaces Service", function(){

    beforeEach(function () {

      module("unacademic.objectives", function($provide){
        $provide.value('users', mockUsers);
        $provide.value('places', mockPlaces);
      });

      inject(function($injector){
        userPlaces = $injector.get('userPlaces');
        $rootScope = $injector.get('$rootScope');
        $q = $injector.get('$q');

      });
    });

    describe("objects retrieval", function(){
      describe("get all places for user", function(){
        var allPlaces;

        beforeEach(function(){
          userPlaces.getAllObjectives('123').then(function(data){
            allPlaces = data;
          });
          $rootScope.$digest();
        });

        it("gets places", function(){
          expect(allPlaces).toBeDefined();
        });

        it('has an added property on the right places', function(){
          expect(allPlaces["000_HTML"].added).toBeTruthy();
        });

        it('does not have an added property on the other places', function(){
          expect(allPlaces["001_Polymer"].added).toBeFalsy();
        });
      });

      describe("get a place for user", function(){
        var place;

        beforeEach(function(){
          userPlaces.getObjective(mockUser, '000_HTML').then(function(data){
            place = data;
          });
          $rootScope.$digest();
        });

        it("gets the place", function(){
          expect(place).toBeDefined();
        });

        it('has the right id', function(){
          expect(place.title).toEqual('HTML');
        });

        it('has all the properties of the general object', function(){
          expect(place.added).toBeTruthy();
          expect(place.completed).toBeDefined();
        });
      });
    });
  });

  var mockPlaces = {
    getAll: function(){
      return $q.when(testPlaces);
    }
  };

  var mockUsers = {
    getUser: function(){
      return mockUser;
    }
  };

  var mockUser = {
    objectives: {
      "000_HTML": {
        added: true,
        completed: false
      }
    }
  };

  var testPlaces = {
    "000_HTML": {
      title: "HTML"
    },
    "001_Polymer": {},
  };
})();
