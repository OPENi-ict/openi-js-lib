'use strict';

console.log('location.js');

angular.module('openi-permission-visualization.location', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/location', {
            templateUrl: 'modules/location/location.html',
            controller: 'locationCtrl'
        });
    }])

    .controller('locationCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('locationCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'location';

        $scope.title = 'Location';

        $scope.description = 'Let apps use my location via: ';

    }]);
