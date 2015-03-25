(function() {
    'use strict';

    angular
        .module('app')
        .controller('Navigation', Navigation);

    Navigation.$inject = ['$location', '$rootScope', '$routeParams', 'SessionService'];

    function Navigation($location, $rootScope, $routeParams, SessionService) {

        /*jshint validthis: true */
        var vm = this;      
        vm.isOnepage = SessionService.getValue('onePage');
        vm.isResponsive = SessionService.getValue('responsiveDesign');
        /* enable responsiveness and one page by default if not set*/
        if (vm.isOnepage == null && vm.isResponsive == null) {
            window.location.href = $location.path();
            SessionService.setValue('onePage', true);
            SessionService.setValue('responsiveDesign', true); 
        }
        
        $rootScope.homeLink = "/";
        if (typeof $routeParams.nofooter != "undefined") {
            $rootScope.noFooter = $routeParams.nofooter;
            $rootScope.homeLink = "/?nofooter=true";
        }
        
        vm.changePage = changePage;
        
        function changePage(location) {
            window.location.href = location;
        }
    }
})();