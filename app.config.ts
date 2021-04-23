'use strict';
import * as angular from 'angular';
angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>',
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>',
        }).
        when('/angular-latest',{
          template: '<angular-latest></angular-latest>',
        }).
        otherwise('/phones');
    }
  ]);
