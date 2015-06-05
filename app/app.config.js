(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider'];

    function routeConfig($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {    
            $routeProvider
            .when('/',{ templateUrl: 'app/home/home.html', title: 'Home'})
            .when('/about',{ templateUrl: 'app/about/about.html', title: 'About us'})
            .when('/technologies',{ templateUrl: 'app/demonstrations/demonstrations.html', title: 'Technologies'})
//            .when('/about',{ templateUrl: 'app/about/about.html', title: 'About'})
            .when('/technologies',{ templateUrl: 'app/technologies/technologies.html', title: 'Technologies'})
            .when('/dynamic-page',{ templateUrl: 'app/dynamic-page/dynamic-page.html', title: 'Dynamic page'})
            .when('/contact-us',{ templateUrl: 'app/contact/contact.html', title: 'Contact us'})
//            .when('/services',{ templateUrl: 'app/services/services.html', title: 'Services page'})
            .when('/#services-container',{ templateUrl: 'app/home/home.html', title: 'Home'})
//            .when('/onepage',{ templateUrl: 'app/onepage/onepage.html', title: 'One page'})
            .otherwise({ redirectTo: '/' });
            
        $locationProvider.html5Mode(true).hashPrefix('!');
        
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }
})();