(function(){

  describe("Place Service", function(){

    var place;

    beforeEach(function () {

      module("unacademic.objectives");

      inject(function($injector){
        Place = $injector.get('Place');
        Task = $injector.get('Task');
      });
    });

    describe("properties", function(){
      var place;

      beforeEach(function(){
        var data = {
          title: "HTML",
          level: 0,
          description: {
            full: "Lorem Ipsem Hopsakidee",
            summary: "Hopsakidee"
          },
          category: "design",
          tasks: [
            {completed: false},
            {completed: true},
            {completed: false},
            {completed: false},
          ]
        };

        place= new Place(data);
      });


      it("has the right properties", function(){
        expect(place.title).toEqual("HTML");
        expect(place.level).toEqual(0);
        expect(place.description.full).toContain("Hopsakidee");
        expect(place.description.full).toContain("Hopsakidee");
        expect(place.tasks[0] instanceof Task).toBeTruthy();
      });

      describe("categories", function(){
        it("has one out of five categories as a property", function(){
          expect(place.category).toBeTruthy();
        });

        it("has the right color code", function(){
          expect(place.color).toEqual('assertive');
        });

        it("has one out of five categories as a property", function(){
          var data = {
            title: "HTML",
            level: 0,
            description: "Lorem Ipsem Hopsakidee",
            category: "Novels"
          };

          place= new Place(data);
          expect(place.category).toBeFalsy();
        });

      });

      describe("completion", function(){
        it("should know what percentage of tasks is completed", function(){
          expect(place.completion).toEqual(25);
        });
      });

      describe("points", function(){

        it("defaults to zero points", function(){
          expect(place.points).toEqual(0);
        });

        it("set the points if provided", function(){
          var data = {
            title: "HTML",
            level: 10,
            points: 100
          };
          place= new Place(data);
          expect(place.points).toEqual(100);
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
          place= new Place(data);
          expect(place.id).toEqual("000_HTML");
        });

        it("generates the correct id for numbers from 10 to 100", function(){
          var data = {
            title: "HTML",
            level: 10
          };
          place = new Place(data);
          expect(place.id).toEqual("010_HTML");
        });

        it("generates the correct id for numbers from 100 to 1000", function(){
          var data = {
            title: "HTML",
            level: 100
          };
          place = new Place(data);
          expect(place.id).toEqual("100_HTML");
        });

        it("generates the correct id for multi word titles", function(){
          var data = {
            title: "HTML is cool",
            level: 100
          };
          place = new Place(data);
          expect(place.id).toEqual("100_HTML_is_cool");
        });
      });

      describe("url", function(){
        var baseUrl;

        beforeEach(function(){
          var data = {
            title: "HTML",
            level: 0
          };
          place = new Place(data);
          baseUrl = place.baseUrl;
        });

        it("generates the correct base url", function(){
          expect(baseUrl).toEqual("img/objectives/html");
        });

        it("generates the correct base url", function(){
          var data = {
            title: "HTML",
            level: 0
          };
          place= new Place(data);
          expect(place.url).toEqual(baseUrl + "/logo.svg");
        });
      });
    });
  });
})();
