(function() {
    'use strict';

    angular
        .module('app')
        .controller('Home', Home);

    Home.$inject = ['$sce','$routeParams', '$rootScope'];

    function Home($sce, $routeParams, $rootScope) {
        /*jshint validthis: true */
        var vm = this;
        $rootScope.noFooter = 'false';
        $rootScope.homeLink = '/';
        
        vm.iframeSource = $sce.trustAsResourceUrl("/?nofooter=true");
        if (typeof $routeParams.nofooter != "undefined") {
            $rootScope.noFooter = $routeParams.nofooter;
            $rootScope.homeLink = "/?nofooter=true";
        }
        
        vm.welcomeText = 'Company home';
    }
})();