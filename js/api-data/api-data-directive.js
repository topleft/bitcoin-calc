
angular.module('directives').directive('apiDataTemplate', ['bitcoinFactory',function(bitcoinFactory){
	return {
		restrict: 'E',
		templateUrl: 'js/api-data/api-data.html',
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

		}
	};
}]);