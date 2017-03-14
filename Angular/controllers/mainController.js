var mainController	 = angular.module('mainController', []);
mainController.controller('homeController', ['$scope', function($scope, $http) {
  $scope.message = "This page will be used to display Home form";
}]);

mainController.controller('AddDoctorController',  ['$scope', function($scope, $http) {
  $scope.message = "This page will be used to display Add Doctor form";
}]);

mainController.controller('ViewDoctorController' , ['$scope', function($scope, $http) {
  $scope.message = "This page will be used to display View Doctor form";
}]);


mainController.controller('loginController',  ['$scope', function($scope, $http) {
  $scope.message = "This page will be used to display Login form";
}]);


mainController.controller('sliderController',  ['$scope', function($scope, $http) {
  $scope.message = "This page will be used to display Slider form";
}]);

mainController.controller('registerController',  ['$scope', function($scope, $http) {
  $scope.message = "Register to acces the Site";
  $scope.register = function()
	{
		alert("Hi",+$scope.email);
  		alert($scope.email.$invalid);
	};
}]);


/*
mainController.controller('accordionController',  ['$scope', function($scope, $http) {
  $scope.message = "This page will be used to display Accordion form";
}]);*/
        
mainController.controller('accordionController',  ['$scope', function($scope, $http) {
	        var accordion = {};
	        $scope.toggleAccordion = function(section) {
    		$scope.accordion[section] = !$scope.accordion[section];
}

  //$scope.message = "This page will be used to display Accordion form";
}]);


        