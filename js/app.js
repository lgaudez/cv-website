/**
 * Created by leo on 08/11/2014.
 */
var myApp = angular.module('cvApp', ['ui.router', 'pascalprecht.translate', 'tmh.dynamicLocale', 'duScroll']);

myApp.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll minus 50 extra pixels
}]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('main', {
            abstract: true,
            views: {
                'header': {
                    templateUrl: "/template/header.html",
                    controller: 'HeaderController'
                },
                '':{

                }
            }
        })
        .state('main.cv', {
            abstract : true,
            views: {
                '@': {
                    templateUrl : "/template/cv.html",
                    controller : 'CvCtrl'
                }
            }

        })
        .state('main.cv.show', {
            url: "/",
             views : {
                skill : {
                    templateUrl : '/template/skills.html',
                    controller: 'SkillCtrl'
                },
                education : {
                    templateUrl : '/template/education.html',
                    controller: 'EducCtrl'
                },
                me : {
                    templateUrl : '/template/me.html'
                },
                work : {
                    templateUrl : '/template/work.html',
                    controller : 'WorkCtrl'
                },
                'contact': {
                    templateUrl: '/template/contact.html'
                }
            }
        })
        .state('main.cv.show.skill', {
            url: "skills"
        })
        .state('main.cv.show.education', {
            url: "education"
        })
        .state('main.cv.show.me', {
            url: "me"
        })
        .state('main.cv.show.work', {
            url: "work"
        })
        .state('main.contact', {
            url: "/contact",
            views : {
                '@' : {
                    templateUrl: '/template/contact.html'
                }
            }
        })

}]);