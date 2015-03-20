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
            { id: 3, title: 'Web Design', description: '', image: './images/home/web-design-icon.png', altText: '', url: $sce.trustAsResourceUrl("/technologies#design")},
        ];
        
        vm.processSteps = [
            {id: 8, image: 'icon-8.png', title: 'Idea', altText: ''},
            {id: 7, image: 'icon-7.png', title: 'Planning', altText: ''},
            {id: 6, image: 'icon-6.png', title: 'Create', altText: ''},
            {id: 5, image: 'icon-5.png', title: 'Success', altText: ''}
        ];
        
        vm.activeStepImage = function(step, index) {
            //set image src to the active icon
            vm.processSteps[index].image = 'icon-' + step.id + '-active.png';
        };
        vm.defaultStepImage = function(step, index) {
            //set image src to the active icon
            vm.processSteps[index].image = 'icon-' + step.id + '.png';
        };
    }
})();