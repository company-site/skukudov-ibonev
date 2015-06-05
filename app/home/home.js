(function() {
    'use strict';

    angular
        .module('app')
        .controller('Home', Home);

    Home.$inject = ['$sce'];

    function Home($sce) {
        /* jshint validthis: true */
        var vm = this;
        
        vm.welcomeText = 'Company home';
        
        vm.ourServices = [
            { id: 1, title: 'Startups', description: '', image: '../images/home/startup-icon.png', altText: '', url: $sce.trustAsResourceUrl("/services#start-up")},
            { id: 2, title: 'Web Development', description: '', image: './images/home/web-development-icon.png', altText: '', url: $sce.trustAsResourceUrl("/services#web-development")},
            { id: 3, title: 'Web Design', description: '', image: './images/home/web-design-icon.png', altText: '', url: $sce.trustAsResourceUrl("/services#design")}
        ];
        
        vm.processSteps = [
            {id: 8, image: 'icon-8.png', title: 'Innovation ', description: 'We permanently innovate in the latest web development and design technologies to improve and strengthen the value of our solutions and respectively turn them in values for our customers.', altText: '', popoverCss: 'work-value-1-background', captionCss: ' extra-padding'},
            {id: 7, image: 'icon-7.png', title: 'Client-centred approach', description: 'We create participatory atmosphere and invite our clients to join in collective problem identification and solving, thereby increasing the relevance of the end solution.', altText: '', popoverCss: 'work-value-2-background', captionCss: ''},
            {id: 6, image: 'icon-6.png', title: 'Passion and ability', description: 'We believe in highly responsive attitude towards the immediate needs of our clients and especially towards their future hopes and dreams as global business and ICT expands. ', altText: '', popoverCss: 'work-value-3-background', captionCss: ''},
            {id: 5, image: 'icon-5.png', title: 'Sustainable results', description: 'Our team is committed to deliver sustainable solutions to our customers on time and within the planned budget using our expertise, innovation strategies and collaboration models.', altText: '', popoverCss: 'work-value-4-background', captionCss: ''}
        ];
        
        // TODO - use ng-repeat to show services
        vm.services = [
            {containerId: 'web-services', name: 'STARTUP / from 500 &euro; /', serviceItems: {}},
            {containerId: 'web-services', name: 'STARTUP / from 500 &euro; /', serviceItems: {}},
            {containerId: 'web-services', name: 'STARTUP / from 500 &euro; /', serviceItems: {}}
        ];
        
        $(document).ready(function() {
            setTimeout(function() {
                $(".main-heading").addClass("css-typing");
                $(".main-heading").removeClass("hide");
            }, 1000);
            setTimeout(function() {
                $(".sub-heading").addClass("css-typing");
                $(".sub-heading").removeClass("hide");
            }, 6000);
        });
    }
})();