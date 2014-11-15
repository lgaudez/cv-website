angular.module('cvApp').controller('CvCtrl',
    ['$scope' , '$rootScope', '$document', '$timeout', function($scope, $rootScope, $document, $timeout) {

        //Scroll to right view
        $scope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                console.log(toState.name);
                var tmp = toState.name.split(".");
                var id  = "#" + (tmp[tmp.length - 1]);
                $timeout(function(){
                    scrollTo(id)
                }, 0);
            }
        );

        $rootScope.$on('$viewContentLoading',
            function(event, viewConfig){
                console.log(event, viewConfig)
                // Access to all the view config properties.
                // and one special property 'targetView'
                // viewConfig.targetView
            });

        function scrollTo(id){
            var elem = angular.element( document.querySelector(id) );
            $document.scrollToElement(elem, 50, 1000);
        }

    }]);


