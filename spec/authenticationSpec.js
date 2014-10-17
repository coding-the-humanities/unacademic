describe("Authentication Service", function(){

  beforeEach(function () {
    var mockUsers;

    mockUsers = {
      getUser: function(){
        return {
          profile: {},
          objectives: {}
        };
      }
    };

    module("unacademic", function($provide){
      $provide.value('users', mockUsers);
      $provide.value('currentUser', {});
    });

    inject(function($injector){
      authentication = $injector.get('authentication');
    });
  });

  describe("signing in", function(){
    beforeEach(function(){
      authentication.signIn();
    });

    it("sets the currentUserId", function(){
      expect(authentication.getCurrentUserId()).toEqual('yeehaa123');
    });

    it("sets profile for the current user", function(){
      expect(authentication.getCurrentUserProfile()).toBeDefined();
    });

    xit("sets objectives for the current user", function(){
      expect(authentication.getCurrentUserObjectives()).toBeDefined();
    });
  });

  xdescribe("signing out", function(){
    beforeEach(function(){
      authentication.signOut();
    });

    it("sets the currentUserId", function(){
      expect(authentication.getCurrentUserId()).not.toBeDefined();
    });

    it("sets profile for the current user", function(){
      expect(authentication.getCurrentUserProfile()).not.toBeDefined();
    });

    it("sets objectives for the current user", function(){
      expect(authentication.getCurrentUserObjectives()).not.toBeDefined();
    });
  });
});
