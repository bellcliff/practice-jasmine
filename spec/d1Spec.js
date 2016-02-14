describe('test template url with directive', function() {

    var $rootScope, $compile, $httpBackend;

    beforeEach(module('d1'));

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
        $httpBackend = $injector.get('$httpBackend');
    }));

    it('check tpl is loaded', function() {
        $httpBackend.expectGET('/public/d1.html').respond('<div></div>');
        var element = $compile('<div url-dir><div>')($rootScope);
        $httpBackend.flush();
        expect(angular.element(element).html()).toBe('<div></div>');
    });
});
