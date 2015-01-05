(function() {
    'use strict';

    angular
        .module('app')
        .controller('About', About);

    About.$inject = [];

    function About() {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'About page';
    }
})();