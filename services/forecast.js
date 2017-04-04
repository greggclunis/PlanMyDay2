myDayApp.factory('forecast',  ['$http', function($http, city){
	return {
		setValues: function(getValues){
			var city = getValues.city;
			var state = getValues.state;

			$http.get('http://api.wunderground.com/api/971501f521a3ab99/forecast/q/' + state + '/' + city + '.json')
				.success(function(data){
					return data;
				})
				.error(function(err){
					return err;
				});

		}
	}


}]);
