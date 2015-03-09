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
        
        vm.ourServices = [
            { id: 1, title: 'Responsive Design', description: 'Description', image: '../images/home/icon-1-red.png', altText: '', url: $sce.trustAsResourceUrl("/services")},
            { id: 2, title: 'Digital Strategy', description: 'Description', image: './images/home/icon-2-red.png', altText: '', url: $sce.trustAsResourceUrl("/services")},
            { id: 3, title: 'Agile Development', description: 'Description', image: './images/home/icon-3-red.png', altText: '', url: $sce.trustAsResourceUrl("/services")},
            { id: 4, title: 'One Page Applications', description: 'Description', image: './images/home/icon-4-red.png', altText: '', url: $sce.trustAsResourceUrl("/services")}
        ];
    }
})();