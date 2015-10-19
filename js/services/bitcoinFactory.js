angular.module('bitcoinCalculator').factory('bitcoinFactory', ['$http',function($http){

		return {
			getBitcoinPrice: function(){ 
				return $http.get("https://bitpay.com/api/rates");
      },
	    calcNewAmt: function(initialAmt, currRate, forecastPrice){
      	return initialAmt/currRate * forecastPrice
      },
      calcProfit: function(initialAmt, currRate, forecastPrice){
      	return (initialAmt/currRate *forecastPrice)-initialAmt;
      }	
    };

}]);


