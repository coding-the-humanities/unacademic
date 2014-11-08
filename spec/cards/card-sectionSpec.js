(function(){
  describe("card section", function(){
    var el, header, section;

    beforeEach(function(){
      module('unacademic.cards');

      module('app/cards/card-section.html');

      template = '<card-section color="positive" title="HTML">HELLO</card-section>';

      inject(function($compile, $rootScope){
        scope = $rootScope;
        el = angular.element(template);
        $compile(el)(scope);
        scope.$apply();
      });

      header = $(el).find('.item-divider');
      section = $(el).find('section');
    });

    describe("properties", function(){
      it("has the class-section class", function(){
        expect(el.hasClass('card-section')).toBeTruthy();
      });

      it("binds the data", function(){
        expect(header.text()).toContain('HTML');
      });

      it("has the right icon color class", function(){
        var icon = $(el).find('i');
        expect(icon.hasClass('positive')).toBeTruthy();
      });

      it("transcludes the text", function(){
        expect(section.text()).toContain('HELLO');
      });
    });


    describe("opening and closing section", function(){

      it("has is closed by default", function(){
        expect(section.hasClass('ng-hide')).toBeTruthy();
      });

      it("is open after clicking header", function(){
        header.click();
        expect(section.hasClass('ng-hide')).toBeFalsy();
      });

      it("has the right color class", function(){
        header.click();
        expect(header.hasClass('item-positive')).toBeTruthy();
      });
    });

  });
})();
