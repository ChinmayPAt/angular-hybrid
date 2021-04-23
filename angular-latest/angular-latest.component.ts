import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

@Component({
    selector: 'angular-latest',
    templateUrl: 'angular-latest/angular-latest.component.html'
})

export class AngularLatestComponent {

}

angular
  .module('phonecatApp')
  .component('angular-latest', downgradeComponent({
    component: AngularLatestComponent
}));