(function() {
    'use strict';

    angular
        .module('app')
        .controller('Demonstrations', Demonstrations);

    Demonstrations.$inject = ['SessionService'];

    function Demonstrations(SessionService) {

        /*jshint validthis: true */
        var vm = this;
        // set variables
        vm.welcomeText = 'Technology demos';
        vm.responsiveDesignState = SessionService.getValue('responsiveness');
        vm.onePageAppState = SessionService.getValue('onepage');
        // functions
        vm.responsiveDesign = responsiveDesign;
        vm.onePageApp = onePageApp;
        
        function responsiveDesign(value){
            SessionService.setValue('responsiveness', value);
            vm.responsiveDesignState = value;
            console.log('ok');
        }
        
        function onePageApp(value){
            SessionService.setValue('onepage', value);
            vm.onePageAppState = value;
            console.log('ok' + vm.onePageAppState);
        }
        
    }
})();