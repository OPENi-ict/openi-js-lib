angular.module('openi-permission-visualization')

    .directive('settingHeader', function() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'directives/setting/setting_header.html'
        };
    });