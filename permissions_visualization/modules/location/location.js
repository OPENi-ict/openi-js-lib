'use strict';

console.log('location.js');

angular.module('openi-permission-visualization.location', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/location', {
            templateUrl: 'modules/location/location.html',
            controller: 'locationCtrl'
        });
    }])

    .controller('locationCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('locationCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'contact_group';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);