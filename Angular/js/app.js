var mainApp = angular.module("mainApp", ['ngRoute','mainController']);

/*mainApp.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 500);
});
*/
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

   when('/slider', {
      templateUrl: 'templates/Slider.html', controller: 'sliderController'
   }).

when('/accordion', {
      templateUrl: 'templates/quickaccordion.html', controller: 'accordionController'
   }).

when('/accordion/#panel1a', {
      templateUrl: 'templates/accordion1.html', controller: 'accordionController'
   }).


when('/accordion/#panel2a', {
      templateUrl: 'templates/accordion2.html', controller: 'accordionController'
   }).

when('/accordion/#panel2a', {
      templateUrl: 'templates/accordion3.html', controller: 'accordionController'
   }).

when('/register', {
      templateUrl: 'templates/register.html', controller: 'registerController'
   }).

   otherwise({
      redirectTo: 'templates/login.html'
   });
	
}]);  