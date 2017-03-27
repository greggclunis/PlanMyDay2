myDayApp.controller('forecastController', ['$scope', 'forecast',  function($scope, forecast){
	$scope.date = new Date();
	forecast.success(function(data){
		$scope.threeDay = data;
	});

}])


.controller('newsController', ['$scope', 'news',  function($scope, news){
	news.success(function(data){
		$scope.getNews = data;
	});

}]);
