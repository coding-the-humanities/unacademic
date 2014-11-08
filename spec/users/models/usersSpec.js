(function(){
  describe("Users Service", function(){


    beforeEach(function () {

      function MockUser(){
        return {
          addObjective: function(){}
        };
      }

      module("unacademic", function($provide){
        $provide.value('User', MockUser);
      });

      inject(function($injector){
        users = $injector.get('users');
      });
    });

    describe("users retrieval", function(){
      var user;

      beforeEach(function(){
        user = users.getUser();
      });

      it("gets a user", function(){
        expect(user).toBeDefined();
      });
    });
  });
})();
