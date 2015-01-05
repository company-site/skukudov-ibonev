(function () {
    'use strict';
    
    // change Page Title based on the routers
    angular
        .module('app')
        .run(['$location', '$rootScope', function($location, $rootScope) {
            $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
                $rootScope.title = current.$$route.title;
            });
        }]);
})();