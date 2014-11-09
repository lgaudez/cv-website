
angular.module('cvApp')
    .config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en', {
        'header.about_me': 'About me',
        'header.work': 'Work',
        'header.education' : 'Education',
        'header.skills' : 'Skills',
        'header.contact' : 'Contact',

        /** me **/

        'me.nationality' : 'French',
        'me.title' : 'About me',
        'me.job' : 'Engineer - Developer',
        'me.desc' : 'Full Stack Developer (Java /javascript). I like to develop project from cratch TODO',
        'me.born_on' : 'Born on',
        'me.phone' : '+33635129106',

        /** Education **/

        'education.title' : 'Education',

        'education.education1.start' : '2012',
        'education.education1.end' : 'Present',
        'education.education1.desc' : '... TODO',
        'education.education1.title' : 'Computer Science',
        'education.education1.institute' : 'INSA de Lyon, Engineering school',

        'education.education2.start' : '2012',
        'education.education2.end' : 'Present',
        'education.education2.desc' : '... TODO',
        'education.education2.title' : 'Computer Science',
        'education.education2.institute' : 'INSA de Lyon, Engineering school',

        /** contact **/

        'contact.contact_details' : 'Contact details',
        'contact.send_message' : 'Send me a message'
    })
        .translations('fr', {
            'header.about_me': 'A propos de moi',
            'header.work': 'Expériences',
            "header.education" : 'Formation',
            'header.skills' : 'Compétences',
            'header.contact' : 'Contact',

            /** me **/

            'me.nationality' : 'Français',
            'me.title' : 'A propos de moi',
            'me.job' : 'Ingénieur - Développeur',
            'me.desc' : 'Developpeur Full Stack (Java / javascript). J\'aime à developper des projets TODO',
            'me.born_on' : 'Née le',
            'me.phone' : '+33635129106',

            /** Education **/

            'education.title' : 'Formation',

            'education.education1.start' : '2012',
            'education.education1.end' : 'Present',
            'education.education1.desc' : '... TODO',
            'education.education1.title' : 'Informatique',
            'education.education1.institute' : 'INSA de Lyon, Ecole d\'ingénieur',

            'education.education2.start' : '2012',
            'education.education2.end' : 'Present',
            'education.education2.desc' : '... TODO',
            'education.education2.title' : 'Computer Science',
            'education.education2.institute' : 'INSA de Lyon, Engineering school',

            /** Contact **/

            'contact.contact_details' : 'Détails',
            'contact.send_message' : 'Envoyez moi un message'
        });

    $translateProvider.preferredLanguage('fr');

}]);