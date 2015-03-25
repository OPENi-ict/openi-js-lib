angular.module('openi-permission-visualization')

    .directive('settingTypes', function() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'directives/setting/setting_types.html'
        };
    });