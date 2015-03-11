(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider) {    
            $routeProvider
            .when('/',{ templateUrl: 'app/home/home.html', title: 'Home'})
            .when('/about',{ templateUrl: 'app/about/about.html', title: 'About us'})
            .when('/technologies',{ templateUrl: 'app/demonstrations/demonstrations.html', title: 'Technologies'})
            .when('/dynamic-page',{ templateUrl: 'app/dynamic-page/dynamic-page.html', title: 'Dynamic page'})
            .when('/contact-us',{ templateUrl: 'app/contact/contact.html', title: 'Contact us'})
            .when('/services',{ templateUrl: 'app/services/services.html', title: 'Services page'})
//            .when('/onepage',{ templateUrl: 'app/onepage/onepage.html', title: 'One page'})
            .otherwise({ redirectTo: '/' });
            
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
})();