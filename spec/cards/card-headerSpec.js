(function(){
  describe("card header", function(){
    var el;

    beforeEach(function(){
      module('unacademic.cards');

      module('app/cards/card-header.html');

      template = '<card-header title="HTML" color="assertive" logo="bla"></card-header>';

      inject(function($compile, $rootScope){
        scope = $rootScope;
        el = angular.element(template);
        $compile(el)(scope);
        scope.$digest();
      });

    });

    describe("properties", function(){
      it("has the card-header class", function(){
        expect(el.hasClass('card-header')).toBeTruthy();
      });

      it("binds the title data", function(){
        var title = $(el).find('h1');
        expect(title.text()).toContain('HTML');
      });

      it("has the right color", function(){
        var title = $(el).find('h1');
        expect(title.hasClass('assertive')).toBeTruthy();
      });

      it("binds the logo data", function(){
        var attr = $(el).find('img').attr('src');
        expect(attr).toEqual('bla');
      });
    });
  });
})();
