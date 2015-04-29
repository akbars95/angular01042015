indexApp.controller("L1Ctrl", function($scope){
    $scope.lesson_title = "Jenkov Lesson #1";
    $scope.helloTo = {};
    $scope.helloTo.title = "World, AngularJS";
});

indexApp.controller("L2Ctrl", function($scope){
    $scope.lesson_title = "Jenkov Lesson #2";
    $scope.myData = {};

    $scope.myData.textF = function(text){
            if(text){
                return "This is text from function " + text;
            }else{
                return "This is text from function";
            }
    };

    $scope.myData.textHTMLF = function(text){
                if(text){
                    return "This is text from function <i>" + text + "</i>";
                }else{
                    return "This is text from function";
                }
        };
    $scope.myData.showHideText = "Show";
    $scope.myData.changeStateCheckBox = true;
    $scope.myData.changeStateCheckBoxF = function(){
        if($scope.myData.changeStateCheckBox){
            $scope.myData.showHideText = "Show";
        }else{
            $scope.myData.showHideText = "Hide";
        }
    };

    $scope.myData.numbers = [];
    $scope.myData.setNumbers = function(){
        for(var i = 0; i < 10; i++){
            $scope.myData.numbers.push(i + 1);
        }
    };
    $scope.myData.setNumbers();

    $scope.myData.currentNumber = " ";
    $scope.myData.curValNum;
    $scope.myData.change = function(curVal){
        $scope.myData.currentNumber = curVal;
        return $scope.myData.currentNumber;
    };

});