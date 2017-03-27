myDayApp.factory('forecast',  ['$http', '$scope', function($http, $scope){
	var mykey = config.MY_WEATHER_KEY;

	$scope.submitForm = function(){
		var city = $scope.city;
		var state = $scope.state;
		return $http.get('http://api.wunderground.com/api/' + mykey + '/forecast/q/' + state + '/' + city + '.json')
			.success(function(data){
				return data;
			})
			.error(function(err){
				return err;
			});
	};




}]);
