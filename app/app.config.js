(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{ templateUrl: 'app/home/home.html', title: 'Home'})
            .when('/about',{ templateUrl: 'app/about/about.html', title: 'About'})
            .when('/technologies',{ templateUrl: 'app/demonstrations/demonstrations.html', title: 'Technologies'})
            .when('/dynamic-page',{ templateUrl: 'app/dynamic-page/dynamic-page.html', title: 'Dynamic page'})
            .when('/contact-us',{ templateUrl: 'app/contact/contact.html', title: 'Contact page'})
            .otherwise({ redirectTo: '/' });
            
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
})();