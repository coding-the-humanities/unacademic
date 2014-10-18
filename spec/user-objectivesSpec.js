describe("Objectives Controller", function () {

  var ctrl, $timeout, vm;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      objectives = $controller("UserObjectives", {
        user: {
          objectives: {}
        }
      });
    });
  });

  it("sets the objectives", function(){
    expect(objectives.all).toBeDefined();
  });

});
