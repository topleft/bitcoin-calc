
angular.module('directives').directive('inputTemplate', ['bitcoinFactory',function(bitcoinFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/input/input.html',
		scope: {
			bitcoin: '='
		},
		controller: function($scope){
			$scope.bitcoin.initialAmt = 5000;
      $scope.bitcoin.forecastPrice = 500;		
		}
	};
}]);