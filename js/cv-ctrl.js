angular.module('cvApp').controller('CvCtrl',
    ['$scope' , '$rootScope', '$document', function($scope, $rootScope, $document) {

        $scope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                console.log(toState.name);
                var tmp = toState.name.split(".");
                var id  = "#" + (tmp[tmp.length - 1]);
                scrollTo(id)
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
            $document.scrollToElement(elem, 50, 0);
        }

    }]);


