// function AppCtrl() {
// 	console.log("Hello there from controller.js!!!")
// }

var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope', '$http',
	function($scope, $http) {
		console.log("Hello there from controller.js!");

		var refreshPage = function() {
			// $http.get('/contactList')
			$http.get('/contactList').success(function(response) {
				console.log("I got the data I requested!!!");
				$scope.contactList = response;
				$scope.contact = "";
			});
		};

		refreshPage();

		$scope.addContact = function() {
			console.log($scope.contact);
			// sends input data to server.js
			$http.post('/contactList', $scope.contact).success(function(response) {
				console.log(response);
				refreshPage();
			}); 
		};

		$scope.remove = function(id) {
			console.log(id);
			$http.delete('/contactList/' + id).success(function(response) {
				refreshPage();
			});
		};

		$scope.edit = function(id) {
			console.log(id);
			$http.get('/contactList/' + id).success(function(response) {
				$scope.contact = response;
			})
		};

		$scope.update = function() {
			console.log($scope.contact._id);
			$http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(response) {
				refreshPage();
			})
		};

		$scope.deselect = function() {
			$scope.contact = "";
		}

	}]);