'use strict';

console.log('contact_groups.js');

angular.module('openi-permission-visualization')

    .controller('settingProtoCtrl', ['$scope', '$location', 'globalsFactory', function($scope, $location, globals) {

        console.log('settingProtoCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, $scope.DIMENSION);
        };

        $scope.redirectToHome = function () {
            $location.path("permission_visualization");
        };

        $scope.leavePermissionVisualization = function () {
            if (globals.homeUrl !== '') {
                $location.path(globals.homeUrl);
            }
        };

    }]);