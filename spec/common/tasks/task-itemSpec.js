(function(){
  describe("taskItem", function(){
    var el;

    beforeEach(function(){
      module("unacademic");

      module("app/common/tasks/task-item.html");
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

      it("has the right colored icon", function(){
        var icon = $(el).find('.icon');
        expect(icon.hasClass('positive')).toBeTruthy();
      });

      it("has the right colored checkbox", function(){
        var label = $(el).find('label');
        expect(label.hasClass('checkbox-positive')).toBeTruthy();
      });
    });

  });
})();
