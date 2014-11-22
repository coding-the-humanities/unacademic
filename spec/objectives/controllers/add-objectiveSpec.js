(function(){
  describe("Add Objective Controller", function () {

    var $timeout, objectives, addObjectiveToUser;

    beforeEach(function () {

      module("unacademic.objectives");

      inject(function ($rootScope, $controller, $q, _$timeout_) {
        $scope = $rootScope.$new();
        $timeout = _$timeout_;

        mockUser = {
          addObjective: function(){},
          removeObjective: function(){}
        };

        addObjectiveToUser = spyOn(mockUser, 'addObjective');
        removeObjectiveFromUser = spyOn(mockUser, 'removeObjective');

        objectives = $controller("AddObjective", {
          authentication: {},
          objectives: {
            '000_HTML': {}
          },
          session: {
            user: mockUser
          }
        });
      });
    });

    it("sets the objectives", function(){
      expect(objectives.all).toBeDefined();
    });
  });
})();
