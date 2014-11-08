(function(){

  describe("Task Service", function(){

    var Task;

    beforeEach(function () {

      module("unacademic.tasks");

      inject(function($injector){
       Task = $injector.get('Task');
      });
    });

    describe("properties", function(){
      var task;

      beforeEach(function(){
        var data = {
          title: "Do This",
          description: "Please, Do This",
          instructions: ["Pretty Please, Do This", "Pretty Please, Do That"],
          resources: ["How To Do This", "How To Do That", "How To Do Everything Else"],
          completed: true
        };
        task = new Task(data);
      });

      it("has the right properties", function(){
        expect(task.title).toEqual("Do This");
        expect(task.description).toEqual("Please, Do This");
        expect(task.instructions.length).toBe(2);
        expect(task.resources.length).toBe(3);
        expect(task.completed).toBeTruthy();
      });

      it("can toggle its complete state", function(){
        task.toggleCompleted();
        expect(task.completed).toBeFalsy();
        task.toggleCompleted();
        expect(task.completed).toBeTruthy();
      });
    });
  });
})();
