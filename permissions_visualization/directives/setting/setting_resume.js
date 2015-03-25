angular.module('openi-permission-visualization')

    .directive('settingResume', function() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'directives/setting/setting_resume.html'
        };
    });