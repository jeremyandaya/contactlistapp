// function AppCtrl() {
// 	console.log("Hello there from controller.js!!!")
// }

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope', '$http',
	function($scope, $http) {
		console.log("Hello there from controller.js!");
	}]);