var mainApp = angular.module("mainApp", ['ngRoute','mainController']);

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
 
   when('/addDoctor', {
      templateUrl: 'templates/addDoctor.html', controller: 'AddDoctorController'
   }).
   
   when('/viewDoctor', {
      templateUrl: 'templates/viewDoctor.html', controller: 'ViewDoctorController'
   }).
   when('/login', {
      templateUrl: 'templates/login.html', controller: 'loginController'
   }).

   when('/home', {
      templateUrl: 'templates/indexTemplate.html', controller: 'homeController'
   }).
 
   otherwise({
      redirectTo: 'templates/login.html'
   });
	
}]);  