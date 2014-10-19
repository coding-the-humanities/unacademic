(function(){

  var objectives;

  describe("userObjectives Service", function(){

    beforeEach(function () {

      var mockUsers = {
        getUser: function(){
          return {
            objectives: {
              "000_HTML": {
                added: true,
                completed: false
              }

            }
          };
        }
      };

      var mockObjectives = {
        getObjectives: function(){
          return {
            "000_HTML": {
              title: "HTML"
            },
            "001_Polymer": {},
          };
        }
      };

      module("unacademic", function($provide){
        $provide.value('users', mockUsers);
        $provide.value('objectives', mockObjectives);
      });

      inject(function($injector){
        objectives = $injector.get('userObjectives');
      });
    });

    describe("objects retrieval", function(){
      describe("get all objectives for user", function(){
        var allObjectives;

        beforeEach(function(){
          allObjectives = objectives.getAllObjectives('123');
        });

        it("gets objectives", function(){
          expect(allObjectives).toBeDefined();
        });

        it('has an added property on the right objectives', function(){
          expect(allObjectives["000_HTML"].added).toBeTruthy();
        });

        it('does not have an added property on the other objectives', function(){
          expect(allObjectives["001_Polymer"].added).toBeFalsy();
        });
      });

      describe("get a objective for user", function(){
        var objective;

        beforeEach(function(){
          objective = objectives.getObjective('123', '000_HTML');
        });

        it("gets the objective", function(){
          expect(objective).toBeDefined();
        });

        it('has the right id', function(){
          expect(objective.title).toEqual('HTML');
        });

        it('has all the properties of the general object', function(){
          expect(objective.added).toBeTruthy();
          expect(objective.completed).toBeDefined();
        });
      });
    });
  });
})();
