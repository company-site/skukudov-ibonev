(function() {
    'use strict';

    angular
        .module('app')
        .controller('Navigation', Navigation);

    Navigation.$inject = ['$location', 'SessionService', '$window'];

    function Navigation($location, SessionService, $window) {

        /*jshint validthis: true */
        var vm = this;
        vm.isOnepage = SessionService.getValue('onePage');
        vm.isResponsive = SessionService.getValue('responsiveDesign');
        console.log(vm.isOnepage);
        
        vm.toggle = function() {
            var toggle = this;

            e.preventDefault();

            $(toggle).toggleClass('toggle-on')
                .toggleClass('toggle-off')
                .addClass('toggle-moving');

            if ($(toggle).hasClass('toggle-on')) {
                sessionStorage.setItem($(toggle).attr('id'), 'true');
            } else {
                 sessionStorage.setItem($(toggle).attr('id'), 'false');
            }

            setTimeout(function() {
                $(toggle).removeClass('toggle-moving');
                window.location.reload();
            }, 200)
        }
        
        vm.changePage = function(location) {
            $location.path(location);
        }
        
        vm.isActive = function(route) {
            return route === $location.path();
        }
        
    }
})();