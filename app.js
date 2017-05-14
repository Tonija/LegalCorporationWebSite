'use strict';

var app = angular.module('app', [
  'ngRoute',
  'flipCard',
  'serviceList',
  'serviceDetail',
  'formGroup'
  ]);

app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      console.log("app config js");

      $routeProvider.
        when('/work', {
          templateUrl: './Partials/work.html'
        }).
        when('/services', {
           
          template: '<service-list></service-list>'
        }).
        when('/services/:serviceId', {
          template: '<service-detail></service-detail>'
        }).
        when('/contact', {
        	templateUrl: './Partials/contact.html'
        }).
        otherwise('/work');
    }
  ]);


