'use strict';

console.log('payment.js');

angular.module('openi-permission-visualization.payment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/payment', {
            templateUrl: 'views/setting.html',
            controller: 'paymentCtrl'
        });
    }])

    .controller('paymentCtrl', ['$scope', '$controller', function($scope, $controller) {

        console.log('paymentCtrl()');

        $controller('settingProtoCtrl', {$scope: $scope});

        $scope.DIMENSION = 'online_payment';

        $scope.title = 'Online Payment';

        $scope.description = 'Let apps use my access online wallet accounts for experiences across apps.';

    }]);
