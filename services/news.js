myDayApp.factory('news',  ['$http', function($http){
	return $http.get('http://webhose.io/search?token=5dfc9c0c-4bcb-421c-bd5b-500635ead10b&format=json&q=New%20York%20City&sort=social.facebook.likes&ts=1490033210581')
		.success(function(data){
			return data;
		})
		.error(function(err){
			return err;
		});
}]);
