describe("Users Service", function(){


  beforeEach(function () {


    module("unacademic");

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

    it("has a profile", function(){
      expect(user.profile).toBeDefined();
    });


  });
});
