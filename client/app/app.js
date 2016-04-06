/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";

angular
	.module("myApp", [
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.router'
])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'homeCtrl'
      })
      .state('rate', {
        url: '/rate',
        templateUrl: 'app/templates/rate.html',
        controller: 'rateCtrl'
      })
      
  }])
  

_.mixin(_.string.exports());
