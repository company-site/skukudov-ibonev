(function() {
    'use strict';

    angular
        .module('app')
        .controller('Contact', Contact);

    Contact.$inject = ['uiGmapGoogleMapApi'];

    function Contact(uiGmapGoogleMapApi) {
        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'For more information contact us';
        vm.mainImage = "../../images/contacts/contact_us.jpg";
        
        // set options passed to map directive in view
        vm.map = {
            zoom: 12,
            center: { 
                latitude: 57.04920, longitude: 9.94393 
            },
            options: {
                scrollwheel: false
            },
            marker: {
                title: 'Websail',
                id: 0,
                coords: {
                  latitude: 57.04920,
                  longitude: 9.94393
                },
                options: { draggable: false },
            }
        };
        
        // uiGmapGoogleMapApi is a promise.
        // The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(function(maps) {                      
            console.log(maps);
        });
    }
})();