'use strict';

console.log('media.js');

angular.module('openi-permission-visualization.media', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/media', {
            templateUrl: 'views/setting.html',
            controller: 'mediaCtrl'
        });
    }])

    .controller('mediaCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('mediaCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'media_files';

        $scope.title = 'Media Files';

        $scope.description = 'Let apps use my media.';

    }]);
