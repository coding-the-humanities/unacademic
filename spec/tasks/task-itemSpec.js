(function(){
  describe("taskItem", function(){
    var el;

    beforeEach(function(){
      module("unacademic.tasks");

      module("app/tasks/views/task-item.html");
      template = '<task-item task="task" color="positive"></task-item>';

      inject(function($compile, $rootScope){
        scope = $rootScope;
        scope.task = {
          title: "HTML"
        };
        el = angular.element(template);
        $compile(el)(scope);
        scope.$digest();
      });

    });

    describe("properties", function(){

      it("has the class-section class", function(){
        expect(el.hasClass('task-item')).toBeTruthy();
      });

      it("has the right title", function(){
        var title = $(el).find('.item').text();
        expect(title).toContain('HTML');
      });

      it("has the right colored button", function(){
        var button = $(el).find('.button');
        expect(button.hasClass('button-positive')).toBeTruthy();
      });

    });

  });
})();
