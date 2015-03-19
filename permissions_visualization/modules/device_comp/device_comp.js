'use strict';

console.log('device_comp.js');

angular.module('openi-permission-visualization.device_comp', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/device_comp', {
            templateUrl: 'modules/device_comp/device_comp.html',
            controller: 'deviceCompCtrl'
        });
    }])

    .controller('deviceCompCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('deviceCompCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'device_comp';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);