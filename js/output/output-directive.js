
angular.module('directives').directive('outputTemplate', ['bitcoinFactory',function(bitcoinFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/output/output.html',
		scope: {
			bitcoin: '='
		},
		controller: function($scope){
      $scope.bitcoin.newAmt = bitcoinFactory.calcNewAmt;
      $scope.bitcoin.profit = bitcoinFactory.calcProfit; 
		}
	};
}]);