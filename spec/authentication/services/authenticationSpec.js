(function(){

  describe("Authentication Service", function(){
    var stateGo;

    beforeEach(function () {

      var mockUsers = {
        getUser: function(){
          return {
            profile: {},
            objectives: {}
          };
        }
      };

      var mockState = {
        go: function(){}
      };

      stateGo = spyOn(mockState, 'go');

      module("unacademic.authentication", function($provide){
        $provide.value('users', mockUsers);
        $provide.value('currentUser', {});
        $provide.value('$state', mockState);
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

      it("transitions to the objectives page", function(){
        expect(stateGo).toHaveBeenCalledWith('app.objectives.user');
      });
    });

    describe("signing out", function(){
      beforeEach(function(){
        authentication.signOut();
      });

      it("removes the currentUserId", function(){
        expect(authentication.getCurrentUserId()).not.toBeDefined();
      });

      it("transitions to the objectives page", function(){
        expect(stateGo).toHaveBeenCalledWith('signin');
      });
    });
  });
})();
