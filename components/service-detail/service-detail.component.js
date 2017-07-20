'use strict';

var serviceDetail = angular.module('serviceDetail', ['ngRoute']);

serviceDetail.component('serviceDetail', {

	templateUrl: './components/service-detail/service-detail.template.html',

	controller: ['$http', '$routeParams',
		function ServiceDetailController($http, $routeParams){
			var self = this;

		 	$http.get('data/' + $routeParams.serviceId + '.json')
		 	.then(function legalServiceSuccess(response) {
		 		self.service = response.data;
		 		console.log(response);
		 	},
		 	function errorCallback(response) {
		 		console.log($routeParams.serviceId);
		 	});

		 	this.showMe = false;
		 	this.detailsButton = "Show";
			this.myFunc = function() { 
	            this.showMe = !this.showMe;
	            if(this.showMe) {
	            	this.detailsButton = "Hide";
	            }
	            else {
	            	this.detailsButton = "Show";
	            }
	        }
		}		
	]
});