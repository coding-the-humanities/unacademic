(function(){
  describe("Users Service", function(){

    var service, $httpBackend, $rootScope, $q;

    beforeEach(function () {

      function MockUser(){
        return {
          addObjective: function(){}
        };
      }

      var mockUsers = ["bill", "ted", "claus"];

      module("unacademic.users", function($provide){
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
      var user;

      beforeEach(function(){
        service.getUser().then(function(data){
          user = data;
        });
        $httpBackend.flush();
      });

      it("gets a user", function(){
        expect(user).toBeDefined();
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
