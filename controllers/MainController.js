myDayApp.controller('forecastController', ['$scope', 'forecast',  function($scope, forecast){
	$scope.date = new Date();

	$scope.getValues = {
		city: '',
		state: ''
	};

	$scope.run = function(){
		console.log(this.location);
	};






}])


.controller('newsController', ['$scope', 'news',  function($scope, news){
	news.success(function(data){
		$scope.getNews = data;
	});

}]);
