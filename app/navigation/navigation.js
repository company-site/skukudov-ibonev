(function() {
    'use strict';

    angular
        .module('app')
        .controller('Navigation', Navigation);

    Navigation.$inject = ['$location', 'SessionService'];

    function Navigation($location, SessionService) {

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
        
        vm.changePage = changePage;
        
        function changePage(location) {
            window.location.href = location;
        }
    }
})();