// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var bitcoinCalculator = angular.module('bitcoinCalculator', []);
  bitcoinCalculator.controller('bitcoinController', ['$scope', function ($scope) {
    // attaching 0 to the DOM
    $scope.somenumber = 0;
  }]);
});
