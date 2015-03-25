'use strict';

console.log('device_profile.js');

angular.module('openi-permission-visualization.device_profile', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/device_profile', {
            templateUrl: 'views/setting.html',
            controller: 'deviceProfileCtrl'
        });
    }])

    .controller('deviceProfileCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('deviceProfileCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'device_profile';

        $scope.title = 'Device Profile';

        $scope.description = 'Let apps use my device unique identifiers (such as: MAC, IP, UDID, UUID, Advertising ID).';

    }]);
