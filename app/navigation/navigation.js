(function() {
    'use strict';

    angular
        .module('app')
        .controller('Navigation', Navigation);

    Navigation.$inject = ['$location'];

    function Navigation($location) {

        /*jshint validthis: true */
        var vm = this;
        
        vm.isActive = function(route) {
            return route === $location.path();
        }
    }
})();