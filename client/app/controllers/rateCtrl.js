angular
  .module('myApp')
  .controller('rateCtrl', ['$scope', function($scope) {
    $scope.title = "About";
     $scope.items = ['home','about','contact'];
  }]);