'use strict';

console.log('media.js');

angular.module('openi-permission-visualization.media', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/media', {
            templateUrl: 'modules/media/media.html',
            controller: 'mediaCtrl'
        });
    }])

    .controller('mediaCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('mediaCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'media_files';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);