angular.module('myApp2', []).controller('myCtrlCountries', function($scope){
	$scope.names = [
	             {name: 'Jani', country:'Norway'},
	             {name: 'Hege', country:'Sweden'},
	             {name: 'Kai', country:'Denmark'},
	             ];
});