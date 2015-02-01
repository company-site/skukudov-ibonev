(function() {
    'use strict';

    angular
        .module('app')
        .controller('Navigation', Navigation);

    Navigation.$inject = ['$location', 'SessionService'];

    function Navigation($location, SessionService) {

        /*jshint validthis: true */
        var vm = this;
        vm.isResponsive = SessionService.getValue('responsiveness');
        console.log(vm.isResponsive);
        vm.isActive = function(route) {
            return route === $location.path();
        }
        
    }
})();