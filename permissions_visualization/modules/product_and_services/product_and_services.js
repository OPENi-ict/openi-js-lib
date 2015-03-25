'use strict';

console.log('product_and_services.js');

angular.module('openi-permission-visualization.product_and_services', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/product_and_services', {
            templateUrl: 'views/setting.html',
            controller: 'productAndServicesCtrl'
        });
    }])

    .controller('productAndServicesCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('productAndServicesCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'product_and_services';

        $scope.title = 'Product and Service';

        $scope.description = 'Let apps use my services and product information.';

    }]);
