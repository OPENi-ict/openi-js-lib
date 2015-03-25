'use strict';

console.log('profile.js');

angular.module('openi-permission-visualization.profile', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'views/setting.html',
            controller: 'ProfileCtrl'
        });
    }])

    .controller('ProfileCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('ProfileCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'profile';

        $scope.title = 'My Profile';

        $scope.description = 'Let apps access my profile such as name, picture and other account information.';

    }]);