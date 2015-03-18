(function() {
    'use strict';

    angular
        .module('app')
        .controller('Services', Services);

    Services.$inject = ['$sce','$routeParams', '$rootScope'];

    function Services() {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'Services page';
    }
})();