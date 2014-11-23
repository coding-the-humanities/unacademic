(function(){
  describe("Places Service", function(){
    var service;
    var Place = function(){
    };

    beforeEach(function () {

      module("unacademic.models.places");

      inject(function($injector){
        service = $injector.get('places', {
          Place: Place
        });
      });
    });

    describe("objects retrieval", function(){
      it("gets all places", function(){
        var places = service.getAll();
      });
    });
  });
})();
