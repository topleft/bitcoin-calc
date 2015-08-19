  console.log("sanity")

  var bitcoinCalculator = angular.module('bitcoinCalculator', []);

  bitcoinCalculator.controller('bitcoinController', function ($scope, $http) {
      $http.get("https://bitpay.com/api/rates")
      .success(function(data){
        $scope.rates = data;
        for (var i = 0; i < data.length; i++) {
          if(data[i].code=="USD"){
            $scope.currRate = data[i].rate;
          }
        }
        $scope.initialAmt = 5000;
        $scope.forecastPrice = 500;
        $scope.newAmt = function(forecastPrice){return $scope.initialAmt/$scope.currRate * forecastPrice}
        $scope.profit = function(forecastPrice){return ($scope.initialAmt/$scope.currRate *forecastPrice)-$scope.initialAmt}
      })
  });