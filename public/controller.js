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

		// person1 = {
		// 	name: 'Hulk',
		// 	email: 'hulk@avengers.com',
		// 	number: '(111) 111-1111'
		// };

		// person2 = {
		// 	name: 'Tony',
		// 	email: 'tony@avengers.com',
		// 	number: '(222) 222-2222'
		// };

		// person3 = {
		// 	name: 'Thor',
		// 	email: 'thor@avengers.com',
		// 	number: '(333) 333-3333'
		// };

		// var contactList = [person1, person2, person3];
		// $scope.contactList = contactList;

	}]);