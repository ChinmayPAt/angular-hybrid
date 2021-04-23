import './lib/angular/angular';
import './lib/angular-animate/angular-animate';
import './lib/angular-mocks/angular-mocks';
import './lib/angular-resource/angular-resource';
import './lib/angular-route/angular-route';
import './lib/jquery/dist/jquery';

import './core/core.index';
import './phone-list/phone-list.index';
import './phone-detail/phone-detail.index';
import './app.module';
import './app.animations';
import './app.config';

import './polyfills.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderComponent } from './header/header.component';
import { AngularLatestComponent } from './angular-latest/angular-latest.component';


@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
    ],
    declarations: [
        HeaderComponent,
        AngularLatestComponent
    ],
    entryComponents: [
        HeaderComponent,
        AngularLatestComponent
    ]
})

export class AppModule {

    public ngDoBootstrap() {
    }
}

// Bootstrap using the UpgradeModule
document.addEventListener("DOMContentLoaded", function () {
    platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
        console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    });
});