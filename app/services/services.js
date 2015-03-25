(function() {
    'use strict';

    angular
        .module('app')
        .controller('Services', Services);

    Services.$inject = ['$http', '$scope'];

    function Services($http, $scope) {

        /*jshint validthis: true */
        var vm = this;
        
        $scope.$on('contactFormSuccess', function(event) {
             $('#contact').modal('hide');
             console.log(event);
        });
        // close contact modal
       

        vm.welcomeText = 'Services page';
    }
})();