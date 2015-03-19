'use strict';

console.log('payment.js');

angular.module('openi-permission-visualization.payment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/payment', {
            templateUrl: 'modules/payment/payment.html',
            controller: 'paymentCtrl'
        });
    }])

    .controller('paymentCtrl', ['$scope', 'globalsFactory', function($scope, globals) {

        console.log('payment()');

        authorizations.add("authorization", new ApiKeyAuthorization('authorization', globals.authToken, 'header'));

        var DIMENSION = 'online_payment';

        $scope.globals = globals;

        $scope.save = function () {
            globals.save(swagger, DIMENSION);
        };

    }]);