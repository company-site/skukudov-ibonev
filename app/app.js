(function () {
    'use strict';
    
    // change Page Title based on the routers
    angular
        .module('app')
        .run(['$location', '$rootScope', '$anchorScroll', '$routeParams',
            function($location, $rootScope, $anchorScroll, $routeParams) {
                $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
                $rootScope.title = current.$$route.title;
                $location.hash($routeParams.scrollTo);
                $anchorScroll();
            });
        }]);
})();