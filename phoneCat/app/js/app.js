var phoneCatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers','phonecatFilters', 'phonecatServices']);

phoneCatApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).otherwise({
        redirectTo: '/phones'
    });
}]);