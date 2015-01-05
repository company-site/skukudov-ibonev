(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{ templateUrl: 'app/home/home.html', title: 'Home'})
            .when('/about-us',{ templateUrl: 'app/about/about.html', title: 'About'})
            .when('/technologies',{ templateUrl: 'app/demonstrations/demonstrations.html', title: 'Technologies'})
//            .when('/dynamic-page',{ templateUrl: 'app/demonstrations/demonstrations.hmtl', title: 'Demos'})
            .otherwise({ redirectTo: '/' });
            
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
})();