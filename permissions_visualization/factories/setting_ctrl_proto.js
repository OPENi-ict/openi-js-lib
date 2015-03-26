'use strict';

console.log('contact_groups.js');

angular.module('openi-permission-visualization')

    .controller('settingProtoCtrl', ['$scope', '$location', 'globalsFactory', function($scope, $location, globals) {

        console.log('settingProtoCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        $scope.globals = globals;

        $scope.save = function () {
            $scope.isReady = false;
            globals.save(swagger, $scope.DIMENSION)
                .done(function () {
                    $scope.isReady = true;
                    $scope.$apply();
                }, function () {
                    $scope.isReady = true;
                    $scope.$apply();
                });
        };

        $scope.redirectToHome = function () {
            $location.path("permission_visualization");
        };

        $scope.leave = function () {
            if (globals.homeUrl !== '') {
                location.replace(globals.homeUrl);
            }
        };

        $scope.isReady = true;

    }]);