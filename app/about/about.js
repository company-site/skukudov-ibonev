(function() {
    'use strict';

    angular
        .module('app')
        .controller('About', About);

    About.$inject = [];

    function About() {

        /*jshint validthis: true */
        var vm = this;

        vm.welcomeText = 'About us';
        
        vm.team = [
            {name: 'Mihail Mihaylov', title: 'CEO / Chief Executive Officer', picture: 'mihail.png', description: 'Description', contacts: {facebook: 'fb', linkedin: 'linkedin', twitter: 'twitter', email: 'email'}},
            {name: 'Stanimir Kukudov', title: 'CTO / Chief Technical Officer', picture: 'stanimir.png', description: 'Description', contacts: {facebook: 'fb', linkedin: 'linkedin', twitter: 'twitter', email: 'email'}},
            {name: 'Iliyan Bonev', title: 'CIO / Chief Information Officer', picture: 'ilian.png', description: 'Description', contacts: {facebook: 'fb', linkedin: 'linkedin', twitter: '', email: 'email'}},
            {name: 'Vanya Zdravkova', title: 'COO / Chief Operations Officer', picture: 'vania.png', description: 'Description', contacts: {facebook: 'fb', linkedin: 'linkedin', twitter: 'twitter', email: 'email'}},
            {name: 'Svetoslav Kukudov', title: 'Lead Designer', picture: 'svetoslav.png', description: 'Description', contacts: {facebook: 'fb', linkedin: 'linkedin', twitter: '', email: 'email'}},
        ];
    }
})();