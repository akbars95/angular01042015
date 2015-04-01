var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "Ion";
    $scope.lastName = "Ionita";
    $scope.fullName = function(){
    	return " -" + $scope.firstName + " _ " + $scope.lastName;
    }
});