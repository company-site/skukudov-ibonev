(function() {
    'use strict';

    angular
        .module('app')
        .controller('Home', Home);

    Home.$inject = [];

    function Home() {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'Company home';
    }
})();