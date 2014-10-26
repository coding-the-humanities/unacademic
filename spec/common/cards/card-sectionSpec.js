(function(){
  describe("card section", function(){
    var el;

    beforeEach(function(){
      module("unacademic");

      module("app/common/cards/card-section.html");

      inject(function($compile, $rootScope){
        var scope = $rootScope;
        scope.section = {title: 'HTML'};
        el = angular.element('<card-section section="section">HTML</card-section>');
        $compile(el)(scope);
        scope.$digest();
        console.log(el);
      });
    });

    it("binds the data", function(){
      expect(el.text()).toContain('HTML');
    });
  });
})();
