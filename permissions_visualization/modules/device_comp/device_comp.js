'use strict';

console.log('device_comp.js');

angular.module('openi-permission-visualization.device_comp', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/device_comp', {
            templateUrl: 'views/setting.html',
            controller: 'deviceCompCtrl'
        });
    }])

    .controller('deviceCompCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('deviceCompCtrlCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'device_comp';

        $scope.title = 'Device Comp';

        $scope.description = 'Let apps use my Webcam and Microphone.';

    }]);
