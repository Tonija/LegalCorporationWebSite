'use strict';

var core = angular.module('app', [
  'ngRoute',
  'flipCard',
  'serviceList',
  'serviceDetail',
  'formGroup'
  ]);

core.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      console.log("app config js");

      $routeProvider.
        when('/work', {
          templateUrl: 'partials/work.html'
        }).
        when('/services', {
           
          template: '<service-list></service-list>'
        }).
        when('/services/:serviceId', {
          template: '<service-detail></service-detail>'
        }).
        when('/contact', {
        	templateUrl: 'partials/contact.html'
        }).
        otherwise('/work');
    }
  ]);


