'use strict';

console.log('app.js');

angular

        .module(
            'openi-permission-visualization',
            [
                'ngRoute',
                'toggle-switch',
                'toastr',
                'ngLoadingSpinner',
                'openi-permission-visualization.permission_visualization',
                'openi-permission-visualization.profile',
                'openi-permission-visualization.payment',
                'openi-permission-visualization.device_profile',
                'openi-permission-visualization.device_comp',
                'openi-permission-visualization.contact_groups',
                'openi-permission-visualization.social_activity',
                'openi-permission-visualization.media',
                'openi-permission-visualization.product_and_services',
                'openi-permission-visualization.health',
                'openi-permission-visualization.location'
            ]
        )

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/permission_visualization'});
        }])

;