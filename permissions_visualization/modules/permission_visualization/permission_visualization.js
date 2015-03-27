'use strict';

console.log('permission_visualization.js');

angular.module('openi-permission-visualization.permission_visualization', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/permission_visualization', {
            templateUrl: 'modules/permission_visualization/permission_visualization.html',
            controller: 'indexCtrl'
        });
    }])

    .controller('indexCtrl', ['$scope', '$location', 'globalsFactory', function($scope, $location, globals) {

        console.log('indexCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        $scope.globals = globals;

        $scope.isReady = false;

        $scope.leave = function () {
            if (globals.homeUrl !== '') {
                location.replace(globals.homeUrl);
            }
        };

        //initSwagger(globals.authToken, globals.cloudletId, globals.serverURL)
        (function () {
            if (globals.swagger) {
                return Promise.resolve();
            } else {
                return initSwagger(globals.authToken, globals.cloudletId, globals.serverURL);
            }
        })()
            .then(function () {
                return globals.initAppManifest(swagger);
            })
//            .then(function () {
//                globals.swagger = swagger;
//                globals.isReady = true;
//                return globals.getAppPermissions(swagger);
//            })
            .then(function () {
                return globals.getPermissions(swagger);
            })
            .then(function (appPermissions) {
                console.log('---> ', appPermissions);
                $scope.appPermissions = appPermissions;
                $scope.globals.appPermissions = appPermissions;
                $scope.globals.filterByAppPermissions(appPermissions);
                return Promise.resolve();
            })
            .then(function () {
                console.log('ok');
                console.log('appPermissions: ', $scope.appPermissions);
                console.log($scope.globals.settings.profile.display);
                $scope.$apply();
                return Promise.resolve();
            })
            .then(function () {
                return globals.filterOutTypesWithoutObj(swagger);
            })
            .then(function () {
                return globals.initPermissions(swagger);
            })
            .done(function () {
                console.log('globals.settings: ', globals.settings);
                $scope.isReady = true;
                $scope.$apply();
            }, function (error) {
                console.log('error: ', error);
            });

    }]);