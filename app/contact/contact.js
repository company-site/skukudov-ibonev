(function() {
    'use strict';

    angular
        .module('app')
        .controller('Contact', Contact);

    Contact.$inject = [];

    function Contact() {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'Contact page';
    }
})();