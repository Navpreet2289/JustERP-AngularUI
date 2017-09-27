﻿import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';

import { AbpModule, ABP_HTTP_PROVIDER } from '@abp/abp.module';

import { SharedModule } from '@shared/shared.module';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { RootRoutingModule } from './root-routing.module';

import { LayoutModule } from './app/theme/layouts/layout.module';
import { ScriptLoaderService } from '@shared/services/script-loader.service';
import { ThemeRoutingModule } from './app/theme/theme-routing.module';
import { AuthModule } from './app/auth/auth.module';
import { ThemeComponent } from './app/theme/theme.component';

import { AppConsts } from '@shared/AppConsts';
import { AppSessionService } from '@shared/session/app-session.service';
import { API_BASE_URL } from '@shared/service-proxies/service-proxies';

import { RootComponent } from './root.component';
import { AppPreBootstrap } from './AppPreBootstrap';


export function appInitializerFactory(injector: Injector) {
  return () => {

    abp.ui.setBusy();
    return new Promise<boolean>((resolve, reject) => {
      AppPreBootstrap.run(() => {
        const appSessionService: AppSessionService = injector.get(AppSessionService);
        appSessionService.init().then(
          (result) => {
            abp.ui.clearBusy();
            resolve(result);
          },
          (err) => {
            abp.ui.clearBusy();
            reject(err);
          }
        );
      });
    });
  }
}

export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    AbpModule,
    ServiceProxyModule,
    RootRoutingModule,
    ThemeRoutingModule,
    LayoutModule,
    AuthModule
  ],
  declarations: [
    RootComponent,
    ThemeComponent
  ],
  providers: [
    ABP_HTTP_PROVIDER,
    ScriptLoaderService,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Injector],
      multi: true
    }
  ],
  bootstrap: [RootComponent]
})
export class RootModule {

}
