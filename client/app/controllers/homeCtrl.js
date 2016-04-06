angular
  .module('myApp')
  .controller('homeCtrl', ['$scope','$timeout', function($scope,$timeout) {
    $scope.title = "Home";

    $scope.items = ['home','about','contact'];
    $scope.display = function() {
  
        $scope.alertDisplayed = true;
      $timeout(function() {
        $scope.alertDisplayed = false;
      }, 5000)
    };
    
    $scope.alertDisplayed = false;

  
  }]);