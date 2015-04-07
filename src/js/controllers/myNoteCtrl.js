app.controller("myNoteCtrl", function($scope){
	$scope.message = "";
	$scope.isDisabled = false;
	$scope.left = function(){
		var count = 100 - $scope.message.length;
		if(count <= 0){
			$scope.isDisabled = true;
		}
		return count;
	};
	
	$scope.clear = function(){
		$scope.message = "";
		if($scope.message.length == 0){
			$scope.isDisabled = false;
		}
	};
	
	$scope.save = function(){
		alert("Note success saved!")
	};
	
});