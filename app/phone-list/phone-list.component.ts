'use strict';
import * as angular from 'angular';

// Register `phoneList` component, along with its associated controller and template

class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  static $inject = ['Phone', '$location'];
  constructor(Phone: any, $location: Location) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }

  /* routeToNg2(path: string) {
    console.log('routeToNg2');
  } */
}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });
