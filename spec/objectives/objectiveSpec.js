(function(){

  describe("Objective Service", function(){

    var Objective;

    beforeEach(function () {

      module("unacademic");

      inject(function($injector){
        Objective = $injector.get('Objective');
      });
    });

    describe("properties", function(){
      var objective;

      beforeEach(function(){
        var data = {
          title: "HTML",
          level: 0
        };

        objective= new Objective(data);
      });


      it("has the right properties", function(){
        expect(objective.title).toEqual("HTML");
        expect(objective.level).toEqual(0);
      });

      describe("generate id", function(){
        beforeEach(function(){
          var data = {
            title: "HTML",
            level: 10
          };

          var data2 = {
            title: "HTML",
            level: 100
          };
          objective2 = new Objective(data);
          objective3 = new Objective(data2);
        });
        it("generates the correct id", function(){
          expect(objective.id).toEqual("000_HTML");
          expect(objective2.id).toEqual("010_HTML");
          expect(objective3.id).toEqual("100_HTML");
        });
      });
    });
  });
})();
