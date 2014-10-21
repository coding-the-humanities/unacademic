(function(){
  describe("Objectives Service", function(){
    var service;
    var Objective = function(){
    };

    beforeEach(function () {

      module("unacademic");

      inject(function($injector){
        service = $injector.get('objectives', {
          Objective: Objective 
        });
      });
    });

    describe("objects retrieval", function(){
      it("gets all objectives", function(){
        var objectives = service.getObjectives(); 
      });
    });
  });
})();
