(function() {
    'use strict';

    angular
        .module('app')
        .controller('Demonstrations', Demonstrations);

    Demonstrations.$inject = [];

    function Demonstrations() {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'Technology demos';
    }
})();