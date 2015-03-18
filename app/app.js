(function () {
    'use strict';
    
    // change Page Title based on the routers
    angular
        .module('app')
        .run(['$location', '$rootScope', '$anchorScroll', '$routeParams',
            function($location, $rootScope, $anchorScroll, $routeParams) {
                $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
                $rootScope.title = (typeof current.$$route !== "undefined") ? current.$$route.title : 'WebSail' ;
                $location.hash($routeParams.scrollTo);
                $anchorScroll();
            });
        }]);
})();