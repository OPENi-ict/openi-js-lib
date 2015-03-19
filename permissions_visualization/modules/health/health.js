'use strict';

console.log('health.js');

angular.module('openi-permission-visualization.health', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/health', {
            templateUrl: 'modules/health/health.html',
            controller: 'healthCtrl'
        });
    }])

    .controller('healthCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('healthCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'health_factors';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);