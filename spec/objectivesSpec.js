describe("Objectives Service", function(){

  beforeEach(function () {

    module("unacademic");

    inject(function($injector){
      objectives = $injector.get('objectives');
    });
  });

  describe("objects retrieval", function(){
    it("gets all objectives", function(){
      expect(objectives.getObjectives()).toBeDefined();
    });
  });
});
