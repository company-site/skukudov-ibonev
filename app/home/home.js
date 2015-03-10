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
            { id: 1, title: 'Responsive Design', description: 'Responsive web design is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.', image: '../images/home/icon-1-red.png', altText: '', url: $sce.trustAsResourceUrl("/services#responsive-design")},
            { id: 2, title: 'Digital Strategy', description: 'The "net" is in a state of informational overload. The useful information we seek might be sometimes in a pile of spam, viral marketing campaigns, and many more sources of unimportant information. We can help you deliver your content, your product to the right audience. Stand out in the crowd and keep evolving your business in the right direction.', image: './images/home/icon-2-red.png', altText: '', url: $sce.trustAsResourceUrl("/services#digital-strategy")},
            { id: 3, title: 'Agile Development', description: 'The Agile movement proposes alternatives to traditional project management. Agile approaches are typically used in software development to help businesses respond to unpredictability.', image: './images/home/icon-3-red.png', altText: '', url: $sce.trustAsResourceUrl("/services#agile-development")},
            { id: 4, title: 'One Page Applications', description: 'Single-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app.', image: './images/home/icon-4-red.png', altText: '', url: $sce.trustAsResourceUrl("/services#one-page-app")}
        ];
        
        vm.processSteps = [
            {id: 8, image: 'icon-8.png', title: 'Idea', altText: ''},
            {id: 7, image: 'icon-7.png', title: 'Planning', altText: ''},
            {id: 6, image: 'icon-6.png', title: 'Create', altText: ''},
            {id: 5, image: 'icon-5.png', title: 'Success', altText: ''},
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