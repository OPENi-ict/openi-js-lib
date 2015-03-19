'use strict';

console.log('permission_visualization.js');

angular.module('openi-permission-visualization.permission_visualization', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/permission_visualization', {
            templateUrl: 'modules/permission_visualization/permission_visualization.html',
            controller: 'indexCtrl'
        });
    }])

    .controller('indexCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('indexCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        $scope.globals = globals;

        $scope.isReady = false;

        //initSwagger(globals.authToken, globals.cloudletId, globals.serverURL)
        initSwagger(globals.authToken, globals.cloudletId, globals.serverURL)
            .then(function () {
                globals.swagger = swagger;
                globals.isReady = true;
                return globals.getAppPermissions(swagger);
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
                return globals.initPermissions(swagger);
            })
            .done(function () {
                console.log('globals.settings: ', globals.settings);
            }, function (error) {
                console.log('error: ', error);
            });

    }]);