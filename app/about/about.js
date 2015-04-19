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
            {name: 'Mihail Mihaylov', title: 'Founder / CEO', picture: 'mihail.png', description: 'Description', contacts: {facebook: '', linkedin: 'https://www.linkedin.com/in/mmihaylov', twitter: '', google: '', email: 'm.mihaylov@softologic.com'}},
            {name: 'Stanimir Kukudov', title: 'Founder / Lead Developer', picture: 'stanimir.png', description: 'Description', contacts: {facebook: '', linkedin: 'https://bg.linkedin.com/in/stkukudov', twitter: '', google: '', email: 'st.kukudov@softologic.com'}},
            {name: 'Iliyan Bonev', title: 'CTO / Chief Technology Officer', picture: 'ilian.png', description: 'Description', contacts: {facebook: '', linkedin: 'https://bg.linkedin.com/in/boneff', twitter: '', google: '', email: 'i.bonev@softologic.dk'}},
            {name: 'Vanya Zdravkova', title: 'COO / Chief Operations Officer', picture: 'vania.png', description: 'Description', contacts: {facebook: '', linkedin: 'https://www.linkedin.com/in/vanyazdravkova', twitter: '', google: '', email: 'v.zdravkova@softologic.dk'}},
            {name: 'Svetoslav Kukudov', title: 'Lead Designer', picture: 'svetoslav.png', description: 'Description', contacts: {facebook: '', linkedin: 'https://bg.linkedin.com/in/svkukudov', twitter: '', google: '', email: 'sv.kukudov@softologic.com'}}
        ];
    }
})();