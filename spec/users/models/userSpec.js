(function(){

  describe("User Service", function(){

    var User, $rootScope;

    beforeEach(function () {
      var mockPlaces = {
        getAll: function(){
          return $q.when(testPlaces);
        }
      };

      module("unacademic.users", function($provide){
        $provide.value('places', mockPlaces);
      });

      inject(function($injector){
        User = $injector.get('User');
        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
      });
    });

    describe("user retrieval", function(){
      var user;

      beforeEach(function(){
        user = new User(testUser);
      });

      describe("profile", function(){
        var profile;

        beforeEach(function(){
          profile = user.profile;
        });

        it("has the right properties", function(){
          expect(profile.id).toEqual('yeehaa123');
          expect(profile.avatar_url).toEqual('');
          expect(profile.portrait_url).toEqual('');
          expect(profile.student_number).toEqual(123456789);
          expect(profile.level).toEqual(100);
          expect(profile.role).toEqual('admin');
        });

        describe('name property', function(){
          var name;

          beforeEach(function(){
            name = profile.name;
          });

          it("has the right properties", function(){
            expect(typeof name.first).toEqual('string');
            expect(typeof name.last).toEqual('string');
          });

          it("has a full name property", function(){
            expect(name.full).toEqual('Jan Hein Hoogstad');
          });
        });
      });

      describe("places", function(){
        var userPlaces;

        beforeEach(function(){
          userPlaces = user.places;
        });

        it("has no places for a new user", function(){
          var keys = Object.keys(userPlaces);
          expect(keys.length).toEqual(0);
        });

        describe("add", function(){
          var keys;
          var id;

          beforeEach(function(){
            user.addPlace('000_html').then(function(data){
              keys = Object.keys(userPlaces);
              id = keys[0];
            });
            $rootScope.$digest();
          });

          it("adds places", function(){
            expect(keys.length).toEqual(1);
          });

          it("stores them under the correct key", function(){
            expect(id).toEqual('000_html');
          });

          it("has the correct title", function(){
            var title = userPlaces[id].title;
            expect(title).toEqual('HTML');
          });

          it("has a started data", function(){
            var started = userPlaces[id].started;
            expect(started instanceof Date).toBeTruthy();
          });

          it("has a completed property that is set to false", function(){
            var completed = userPlaces[id].completed;
            expect(completed).toBeFalsy();
          });
        });

        describe("remove", function(){

          it("removes places", function(){
            var keys = Object.keys(userPlaces);

            user.places['000_html'] = "bla";
            expect(keys.length).toEqual(1);

            user.removePlace('000_html');
            keys = Object.keys(userPlaces);

            expect(keys.length).toEqual(0);
          });
        });

        describe("markPlaceCompleted", function(){
          it("marks places as completed", function(){
            var key = '000_html';

            user.places[key] = {};
            user.markPlaceCompleted(key);

            var place = userPlaces[key];
            expect(place.completed instanceof Date).toBeTruthy();

          });
        });
      });
    });
  });

  var testPlaces = {
    '000_html': {
      level: 0,
      title: "HTML"
    },
    '000_css': {
      level: 0,
      title: "CSS"
    },
    '000_gists': {
      level: 0,
      title: "Gists"
    },
    '000_user_camera_study': {
      level: 0,
      title: "User Camera Study"
    }
  };

  var testUser = {};

  var profile = {
    id: 'yeehaa123',
    name: {
      first: 'Jan Hein',
      last: 'Hoogstad'
    },
    avatar_url: '',
    portrait_url: '',
    student_number: 123456789,
    level: 100,
    study: 'Philosophy',
    role: 'admin',
  };

  testUser.profile = profile;
  testUser.places = {};

})();
