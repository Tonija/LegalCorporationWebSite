'use strict';

var serviceList = angular.module('serviceList', []);

serviceList.component('serviceList', {

	templateUrl: './partials/service-list.template.html',

	controller: ['$http',
		function ServiceListController($http){
			var self = this;
			self.orderProp = 'age';

			$http.get('data/services.json').then(function(response){
				self.services=response.data;
			});
	    }
    ]
});