'use strict';

console.log('profile.js');

angular.module('openi-permission-visualization.profile', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'modules/profile/profile.html',
            controller: 'ProfileCtrl'
        });
    }])

    .controller('ProfileCtrl', ["$scope", 'globalsFactory', function($scope, globals) {

        console.log('ProfileCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'profile';

        $scope.globals = globals;

        $scope.isReady = false;

//        globals.getPermissions(swagger)
//            .done(function (permissions) {
//                console.log('getPermissions: ', permissions);
//                $scope.globals.permissions = permissions;
//                globals.permissions = permissions;
//                $scope.isReady = true;
//            },function (error) {
//                console.log('error: ', error);
//            });

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);