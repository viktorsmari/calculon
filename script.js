var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

  
  $scope.final_amount = $scope.original_amount 

  $scope.result = function(){
    return $scope.interest_rate * $scope.original_amount;
  }

});
