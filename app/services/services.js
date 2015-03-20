(function() {
    'use strict';

    angular
        .module('app')
        .controller('Services', Services);

    Services.$inject = ['$http'];

    function Services($http) {

        /*jshint validthis: true */
        var vm = this;
        vm.contactForm = {};

        vm.submitForm = function () {
            console.log(vm.contactForm);
            $http({
                url: '/mail/sendMail.php',
                method: 'POST',
                params: { contactForm: JSON.stringify(vm.contactForm) }
            })
            .success(function(data, status) {
                console.log(data, status);
                toastr.success(data.message);
                vm.contactForm = {};
            })
            .error(function(data, status) {
                console.log(data, status);
                toastr.error(data.message);
            })
            .finally(function() {
                // close contact modal
                $('#contact').modal('hide');
            });
        };

        vm.welcomeText = 'Services page';
    }
})();