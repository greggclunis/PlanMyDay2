var myDayApp = angular.module('myDay', ['ngRoute']);
myDayApp.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "select.html"
  })

  .when("/weather", {
    templateUrl: "forecast.html"
  });
});
