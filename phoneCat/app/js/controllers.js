/**
 * Created by dmitriim on 4/14/2015.
 */

/*var phoneCarApp = angular.module('phoneCarApp', ['ngRoute','phonecatControllers']);

phoneCarApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/phones', {
        templateUrl: '/partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).when('phones/:phoneId', {
        templateUrl: 'phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).otherwise({
        redirectTo: '/phones'
    });
}]);


*//*function PhoneListCtrl($scope, $http){}

PhoneListCtrl.$inject = ['$scope', '$http'];*//*

phoneCarApp.controller('PhoneListCtrl', function($scope, $http){
    $scope.phones = [
     {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 5},
     {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
     {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3}
     ];

    $http.get('app/phones/phones.json').success(function(data){
        $scope.phones = data;
    });

    *//*$scope.phones2 = phones.splice(0, 5);*//*

    $scope.orderProp = 'age';
});*/

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);