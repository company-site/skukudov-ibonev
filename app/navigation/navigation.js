(function() {
    'use strict';

    angular
        .module('app')
        .controller('Navigation', Navigation);

    Navigation.$inject = ['$location', 'SessionService', '$window'];

    function Navigation($location, SessionService, $window) {

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
        
        vm.toggle = function() {
        }
        
        vm.changePage = function(location) {
            window.location.href = location;
        }
        
        vm.isActive = function(route) {
            return route === $location.path();
        }

    }
})();