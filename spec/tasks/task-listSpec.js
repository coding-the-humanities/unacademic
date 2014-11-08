(function(){
  describe("tasklist", function(){
    var el;

    beforeEach(function(){
      module("unacademic.tasks");

      module("app/tasks/views/task-list.html");
      template = '<task-list tasks="tasks"></task-list>';

      inject(function($compile, $rootScope, $templateCache){
        $templateCache.put('app/tasks/views/task-item.html', '<div class="item"></div>');
        scope = $rootScope;
        scope.tasks = [
          {title: "HTML"},
          {title: "CSS"}
        ];
        el = angular.element(template);
        $compile(el)(scope);
        scope.$digest();
      });
    });

    describe("properties", function(){

      it("has the class-section class", function(){
        expect(el.hasClass('tasklist')).toBeTruthy();
      });

      it("binds the tasks", function(){
        var tasks = $(el).find('.item');
        expect(tasks.length).toBe(2);
      });

    });

  });
})();
