'use strict';

console.log('health.js');

angular.module('openi-permission-visualization.health', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/health', {
            templateUrl: 'views/setting.html',
            controller: 'healthCtrl'
        });
    }])

    .controller('healthCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('healthCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'health_factors';

        $scope.title = 'Health Factors and Conditions';

        $scope.description = 'Let apps access my health profile information.';

    }]);
