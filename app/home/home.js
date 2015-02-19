(function() {
    'use strict';

    angular
        .module('app')
        .controller('Home', Home);

    Home.$inject = ['$sce'];

    function Home($sce) {
        /*jshint validthis: true */
        var vm = this;
        vm.iframeSource = $sce.trustAsResourceHtml("https://www.youtube.com/watch?v=qI4tj1YZbiM");

        vm.welcomeText = 'Company home';
    }
})();