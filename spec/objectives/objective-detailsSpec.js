describe("ObjectiveDetails Controller", function () {

  var ctrl, $timeout, objective;

  beforeEach(function () {

    module("unacademic");

    inject(function ($rootScope, $controller, $q, _$timeout_) {
      $scope = $rootScope.$new();
      $timeout = _$timeout_;

      objective = $controller("ObjectiveDetails", {
        objective: {
          title: "HTML"
        }
      });
    });
  });

  it("sets the objective", function(){
    expect(objective.title).toBeDefined();
  });
});
