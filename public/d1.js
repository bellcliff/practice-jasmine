(function(window) {
    'use strict';

    angular.module('d1', []).directive('urlDir', function() {
        return {
            templateUrl: '/public/d1.html'
        };
    });
})(this);
