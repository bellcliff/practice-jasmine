module.exports = function(config){
    config.set({
        frameworks: ['jasmine'],
        browsers: ['Chrome', 'Firefox', 'IE', 'PhantomJS'],
        basePath: '.',
        files: [
            'public/libs/angular/angular.js',
            'public/libs/angular-mocks/angular-mocks.js',
            'public/*.js',
            'spec/*Spec.js'
        ]
    });
};
