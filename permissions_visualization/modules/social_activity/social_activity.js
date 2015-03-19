'use strict';

console.log('social_activity.js');

angular.module('openi-permission-visualization.social_activity', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/social_activity', {
            templateUrl: 'modules/social_activity/social_activity.html',
            controller: 'socialActivityCtrl'
        });
    }])

    .controller('socialActivityCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('socialActivityCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'social_activity';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);