'use strict';
// Login comntroller for our view
angular.module('MyApp')
  .controller('NewsfeedCtrl', ['$scope', '$http',  function($scope,$http) {
		$http.get('shoes.json').success(function(data) {
			$scope.shoes = data;
		});

		$scope.orderProp = 'age';  		
  }]);