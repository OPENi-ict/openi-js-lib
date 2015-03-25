'use strict';

console.log('social_activity.js');

angular.module('openi-permission-visualization.social_activity', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/social_activity', {
            templateUrl: 'views/setting.html',
            controller: 'socialActivityCtrl'
        });
    }])


    .controller('socialActivityCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('socialActivityCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'social_activity';

        $scope.title = 'Social Activity';

        $scope.description = 'Let apps access information about my social activity.';

    }]);
