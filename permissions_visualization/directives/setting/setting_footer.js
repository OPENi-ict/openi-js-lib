angular.module('openi-permission-visualization')

    .directive('settingFooter', function() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'directives/setting/setting_footer.html'
        };
    });