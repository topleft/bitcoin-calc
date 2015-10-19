
angular.module('directives').directive('inputTemplate', ['bitcoinFactory',function(bitcoinFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/input/input.html',
		scope: {
			bitcoin: '='
		},
		controller: function($scope){

			bitcoinFactory.getBitcoinPrice()
	      .success(function(data){
	        for (var i = 0; i < data.length; i++) {
	          if(data[i].code=="USD"){
	            $scope.bitcoin.currRate = data[i].rate;
	          }
	        }
	      })
	      .error(function(err){
	       console.log(err);
	     	});

			$scope.bitcoin.initialAmt = 5000;
      $scope.bitcoin.forecastPrice = 500;		

		}
	};
}]);