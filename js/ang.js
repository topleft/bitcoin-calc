
  var bitcoinCalculator = angular.module('bitcoinCalculator', ['directives']);

  bitcoinCalculator.controller('bitcoinController', function ($scope, bitcoinFactory) {
        $scope.bitcoin = {};
  });

  angular.module('directives', []);