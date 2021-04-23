import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

@Component({
    selector: 'header',
    templateUrl: 'header/header.component.html'
})

export class HeaderComponent {

}

angular
  .module('phonecatApp')
  .directive('header', downgradeComponent({
    component: HeaderComponent
}));