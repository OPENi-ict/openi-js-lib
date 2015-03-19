'use strict';

console.log('product_and_services.js');

angular.module('openi-permission-visualization.product_and_services', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/product_and_services', {
            templateUrl: 'modules/product_and_services/product_and_services.html',
            controller: 'productAndServicesCtrl'
        });
    }])

    .controller('productAndServicesCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('productAndServicesCtrl()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

    }]);