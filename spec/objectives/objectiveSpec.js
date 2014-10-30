(function(){

  describe("Objective Service", function(){

    var objective;

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
          level: 0,
          description: {
            full: "Lorem Ipsem Hopsakidee",
            summary: "Hopsakidee"
          },
          category: "design"
        };

        objective= new Objective(data);
      });


      it("has the right properties", function(){
        expect(objective.title).toEqual("HTML");
        expect(objective.level).toEqual(0);
        expect(objective.description.full).toContain("Hopsakidee");
        expect(objective.description.full).toContain("Hopsakidee");
        // expect(objective.tasks instanceof Task).toBeTruthy();
      });

      describe("categories", function(){
        it("has one out of five categories as a property", function(){
          expect(objective.category).toBeTruthy();
        });

        it("has the right color code", function(){
          expect(objective.color).toEqual('assertive');
        });

        it("has one out of five categories as a property", function(){
          var data = {
            title: "HTML",
            level: 0,
            description: "Lorem Ipsem Hopsakidee",
            category: "Novels"
          };

          objective= new Objective(data);
          expect(objective.category).toBeFalsy();
        });

      });

      describe("points", function(){

        it("defaults to zero points", function(){
          expect(objective.points).toEqual(0);
        });

        it("set the points if provided", function(){
          var data = {
            title: "HTML",
            level: 10,
            points: 100
          };
          objective= new Objective(data);
          expect(objective.points).toEqual(100);
        });

        it("defaults to zero points", function(){
        });
      });

      describe("id", function(){
        it("generates the correct id for numbers until 10", function(){
          var data = {
            title: "HTML",
            level: 0
          };
          objective= new Objective(data);
          expect(objective.id).toEqual("000_HTML");
        });

        it("generates the correct id for numbers from 10 to 100", function(){
          var data = {
            title: "HTML",
            level: 10
          };
          objective = new Objective(data);
          expect(objective.id).toEqual("010_HTML");
        });

        it("generates the correct id for numbers from 100 to 1000", function(){
          var data = {
            title: "HTML",
            level: 100
          };
          objective = new Objective(data);
          expect(objective.id).toEqual("100_HTML");
        });

        it("generates the correct id for multi word titles", function(){
          var data = {
            title: "HTML is cool",
            level: 100
          };
          objective = new Objective(data);
          expect(objective.id).toEqual("100_HTML_is_cool");
        });
      });

      describe("url", function(){
        var baseUrl;

        beforeEach(function(){
          var data = {
            title: "HTML",
            level: 0
          };
          objective = new Objective(data);
          baseUrl = objective.baseUrl;
        });

        it("generates the correct base url", function(){
          expect(baseUrl).toEqual("img/objectives/html");
        });

        it("generates the correct base url", function(){
          var data = {
            title: "HTML",
            level: 0
          };
          objective= new Objective(data);
          expect(objective.url).toEqual(baseUrl + "/logo.svg");
        });
      });
    });
  });
})();
