﻿import { Component, ViewEncapsulation, ViewContainerRef, Injector, OnInit, AfterViewInit } from '@angular/core';
import { AppConsts } from './shared/AppConsts';
import { AppComponentBase } from './shared/components/app-component-base';

import { SignalRAspNetCoreHelper } from './shared/services/helpers/SignalRAspNetCoreHelper';

@Component({
  selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends AppComponentBase implements OnInit, AfterViewInit {

  private viewContainerRef: ViewContainerRef;

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    if (this.appSession.application.features['SignalR']) {
      SignalRAspNetCoreHelper.initSignalR();
    }

    abp.event.on('abp.notifications.received', userNotification => {
      abp.notifications.showUiNotifyForUserNotification(userNotification);

      //Desktop notification
      Push.create("AbpZeroTemplate", {
        body: userNotification.notification.data.message,
        icon: abp.appPath + 'assets/app-logo-small.png',
        timeout: 6000,
        onClick: function () {
          window.focus();
          this.close();
        }
      });
    });
  }

  ngAfterViewInit(): void {
    
  }
}