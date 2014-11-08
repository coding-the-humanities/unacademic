(function(){

  describe("User Service", function(){

    var User, $rootScope;

    beforeEach(function () {
      var mockObjectives = {
        getObjectives: function(){
          return $q.when(testObjectives);
        }
      };

      module("unacademic.users", function($provide){
        $provide.value('objectives', mockObjectives);
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

      describe("objectives", function(){
        var userObjectives;

        beforeEach(function(){
          userObjectives = user.objectives;
        });

        it("has no objectives for a new user", function(){
          var keys = Object.keys(userObjectives);
          expect(keys.length).toEqual(0);
        });

        describe("add", function(){
          var keys;
          var id;

          beforeEach(function(){
            user.addObjective('000_html').then(function(data){
              keys = Object.keys(userObjectives);
              id = keys[0];
            });
            $rootScope.$digest();
          });

          it("adds objectives", function(){
            expect(keys.length).toEqual(1);
          });

          it("stores them under the correct key", function(){
            expect(id).toEqual('000_html');
          });

          it("has the correct title", function(){
            var title = userObjectives[id].title;
            expect(title).toEqual('HTML');
          });

          it("has a started data", function(){
            var started = userObjectives[id].started;
            expect(started instanceof Date).toBeTruthy();
          });

          it("has a completed property that is set to false", function(){
            var completed = userObjectives[id].completed;
            expect(completed).toBeFalsy();
          });
        });

        describe("remove", function(){

          it("removes objectives", function(){
            var keys = Object.keys(userObjectives);

            user.objectives['000_html'] = "bla";
            expect(keys.length).toEqual(1);

            user.removeObjective('000_html');
            keys = Object.keys(userObjectives);

            expect(keys.length).toEqual(0);
          });
        });

        describe("markObjectiveCompleted", function(){
          it("marks objectives as completed", function(){
            var key = '000_html';

            user.objectives[key] = {};
            user.markObjectiveCompleted(key);

            var objective = userObjectives[key];
            expect(objective.completed instanceof Date).toBeTruthy();

          });
        });
      });
    });
  });

  var testObjectives = {
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
  testUser.objectives = {};

})();
