/**
 * Created by leo on 08/11/2014.
 */
var myApp = angular.module('cvApp', ['ui.router', 'pascalprecht.translate', 'tmh.dynamicLocale']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('main', {
            url:"/",
            views: {
                'header' :{
                    templateUrl: "/template/header.html",
                    controller : 'HeaderController'
                },
                'content' : {
                    template: "<div ui-view></div>"
                }
            }
        })
        .state('main.cv', {
            url: "cv",
            template: '<div ui-view></div>'
        })
        .state('main.cv.skills', {
            url: "/skills",
            templateUrl : '/template/skills.html'
        })
        .state('main.cv.education', {
            url: "/education",
            templateUrl : '/template/education.html',
            controller: 'EducationCtrl'
        })
        .state('main.cv.me', {
            url: "/me",
            templateUrl : '/template/me.html'
        })
        .state('main.cv.work', {
            url: "/work",
            templateUrl : '/template/work.html'
        })
        .state('main.cv.contact', {
            url: "/contact",
            templateUrl : '/template/contact.html'
        })

}]);