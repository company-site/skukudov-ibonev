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
            {name: 'Mihail Mihaylov', title: 'CEO / Chief Executive Officer', picture: 'mihail.png', description: 'Description', contacts: {facebook: 'https://www.facebook.com/mihail.mihailov.ol', linkedin: 'https://www.linkedin.com/in/mmihaylov', twitter: '', email: 'm.mihaylov@softologic.com'}},
            {name: 'Stanimir Kukudov', title: 'CTO / Chief Technical Officer', picture: 'stanimir.png', description: 'Description', contacts: {facebook: 'https://www.facebook.com/stanimir.kukudov', linkedin: 'https://bg.linkedin.com/in/stkukudov', twitter: 'twitter', email: 'st.kukudov@softologic.com'}},
            {name: 'Iliyan Bonev', title: 'CIO / Chief Information Officer', picture: 'ilian.png', description: 'Description', contacts: {facebook: 'https://www.facebook.com/iliyan.bonev.3', linkedin: 'https://bg.linkedin.com/in/boneff', twitter: '', email: 'i.bonev@softologic.dk'}},
            {name: 'Vanya Zdravkova', title: 'COO / Chief Operations Officer', picture: 'vania.png', description: 'Description', contacts: {facebook: 'fb', linkedin: 'linkedin', twitter: 'twitter', email: 'email'}},
            {name: 'Svetoslav Kukudov', title: 'Lead Designer', picture: 'svetoslav.png', description: 'Description', contacts: {facebook: 'https://www.facebook.com/SvetoslavKukudov', linkedin: 'https://bg.linkedin.com/in/svkukudov', twitter: '', email: 'sv.kukudov@softologic.com'}}
        ];
    }
})();