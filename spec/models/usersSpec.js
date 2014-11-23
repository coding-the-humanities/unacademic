(function(){
  describe("Users Service", function(){

    var service, $httpBackend, $rootScope, $q;

    beforeEach(function () {

      function MockUser(){
        return {
          addObjective: function(){}
        };
      }

      var mockUsers = {
        bill: {
          name: "Bill"
        },
        ted: {
          name: "Ted"
        },
        jack: {
          name: "Jack"
        }
      };

      module("unacademic.models.users", function($provide){
        $provide.value('User', MockUser);
      });

      inject(function($injector){
        service = $injector.get('users');
        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'api/users.json').respond(mockUsers);
        $q = $injector.get('$q');
      });
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe("user retrieval", function(){
      describe("valid id", function(){
        var user;

        beforeEach(function(){
          service.getUser('bill').then(function(data){
            user = data;
          });
          $httpBackend.flush();
        });

        it("gets a user", function(){
          expect(user).toBeDefined();
        });
      });

      describe("invalid id", function(){
        var user;

        beforeEach(function(){
          service.getUser('kill').then(function(data){
            user = data;
          });
          $httpBackend.flush();
        });

        it("gets a user", function(){
          expect(user).not.toBeDefined();
        });
      });
    });

    describe("users retrieval", function(){
      var users;

      beforeEach(function(){
        service.getUsers().then(function(data){
          users = data;
        });
        $httpBackend.flush();
      });

      it("gets a user", function(){
        expect(users).toBeDefined();
      });
    });
  });

})();
