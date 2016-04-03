angular
  .module('myApp')
  .controller('aboutCtrl', ['$scope', function($scope) {
    $scope.title = "About";
     $scope.items = ['home','about','contact'];
  }]);