(function() {
    'use strict';

    angular
        .module('app')
        .controller('Contact', Contact);

    Contact.$inject = ['$http'];

    function Contact($http) {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'Contact page';
        vm.contactForm = {};
        
        vm.submitForm = function () {
            console.log(vm.contactForm);
            $http({
                url: '/services/sendMail.php',
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
            });
        }
    }
})();