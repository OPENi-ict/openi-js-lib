'use strict';

console.log('contact_groups.js');

angular.module('openi-permission-visualization.contact_groups', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact_groups', {
            templateUrl: 'modules/contact_groups/contact_groups.html',
            controller: 'contactGroupsCtrl'
        });
    }])

    .controller('contactGroupsCtrl', ['$scope', '$location', 'globalsFactory', function($scope, $location, globals) {

        console.log('contactGroupsCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'contact_group';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

        $scope.redirectToHome = function () {
            $location.path("permission_visualization");
        };

    }]);