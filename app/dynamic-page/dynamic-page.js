(function() {
    'use strict';

    angular
        .module('app')
        .controller('DynamicPage', DynamicPage);

    DynamicPage.$inject = [];

    function DynamicPage() {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'Dynamic page';
    }
})();