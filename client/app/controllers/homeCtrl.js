angular
  .module('myApp')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "Home";

    $scope.items = ['home','about','contact'];
    

  
  }]);