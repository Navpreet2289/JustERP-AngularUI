﻿import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';

import { AbpModule } from '@abp/abp.module';

import { AccountRoutingModule } from './account-routing.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';

import { SharedModule } from '@shared/shared.module';

import { AccountComponent } from './account.component';
import { TenantChangeComponent } from './tenant/tenant-change.component';
import { TenantChangeModalComponent } from './tenant/tenant-change-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountLanguagesComponent } from './layout/account-languages.component';

import { LoginService } from './login/login.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AbpModule,
        SharedModule,
        ServiceProxyModule,
        AccountRoutingModule,
        ModalModule.forRoot()
    ],
    declarations: [
        AccountComponent,
        TenantChangeComponent,
        TenantChangeModalComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        AccountLanguagesComponent
    ],
    providers: [
        LoginService
    ]
})
export class AccountModule {

}
