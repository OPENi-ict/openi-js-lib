'use strict';

console.log('device_profile.js');

angular.module('openi-permission-visualization.device_profile', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/device_profile', {
            templateUrl: 'modules/device_profile/device_profile.html',
            controller: 'deviceProfileCtrl'
        });
    }])

    .controller('deviceProfileCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('deviceProfileCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'device_profile';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);