describe('verify check directive', function() {
    var scope, $compile, $http, $httpBackend, $interval, $rootScope;

    beforeEach(module('check'));
    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
        $http = $injector.get('$http');
        $interval = $injector.get('$interval');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('/check').respond({});
    }));

    it('check init params', function() {
        var cnt = '<check-directive url="/check" number="3" interval="1000"></check-directive>';
        var element = $compile(cnt)($rootScope);
        var scope = element.isolateScope();
        expect(scope.opts).toEqual({
            number: 3,
            interval: 1000,
            url: '/check'
        });
    });

    it('check default params', function() {
        var element = $compile('<check-directive></check-directive>')($rootScope);
        scope = element.isolateScope();
        expect(scope.opts).toEqual({
            number: 5,
            interval: 10,
            url: '/check'
        });
    });

    it('check interval and http', function() {
        var element = $compile('<check-directive></check-directive>')($rootScope);
        scope = element.isolateScope();

        // add interval check
        $interval.flush(10);
        $httpBackend.flush();
        expect(scope.msgs.length).toEqual(1);
    });

    it('check interval and http', function() {
        var element = $compile('<check-directive></check-directive>')($rootScope);
        scope = element.isolateScope();

        // add interval check
        $interval.flush(60);
        $httpBackend.flush();
        expect(scope.msgs.length).toEqual(5);
    });
});
