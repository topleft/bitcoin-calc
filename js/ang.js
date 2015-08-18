  console.log("sanity")

  var bitcoinCalculator = angular.module('bitcoinCalculator', []);
  bitcoinCalculator.controller('bitcoinController', ['$scope', function ($scope) {
    // attaching 0 to the DOM
    $scope.somenumber = 0;
  }]);