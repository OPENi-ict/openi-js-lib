'use strict';

console.log('contact_groups.js');

angular.module('openi-permission-visualization.contact_groups', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact_groups', {
            templateUrl: 'views/setting.html',
            controller: 'contactGroupsCtrl'
        });
    }])


    .controller('contactGroupsCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('contactGroupsCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'contact_group';

        $scope.title = 'Contact / Groups';

        $scope.description = 'Let apps access my contacts information.';

    }]);
