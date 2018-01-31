﻿import { Component, Injector } from '@angular/core';
import { TenantServiceProxy, CreateTenantDto, TenantDto } from '../../shared/services/api-proxies/api-proxies';
import { CreateUpdateComponentBase } from '../../shared/components/page/create-update-component-base';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'create-update-tenant-modal',
    templateUrl: './create-tenant.component.html'
})
export class CreateTenantComponent extends CreateUpdateComponentBase<TenantDto, CreateTenantDto> {

    protected create(): Observable<any> {
        return this._tenantService.create(<CreateTenantDto>this.model)
    }
    protected update(): Observable<any> {
        return this._tenantService.update(<TenantDto>this.model);
    }
    protected get(id: number): Observable<TenantDto> {
        return this._tenantService.get(id);
    }
    protected instanceCreateEntityDto(): CreateTenantDto {
        let createTenant = new CreateTenantDto();
        createTenant.init({ isActive: true });
        return createTenant;
    }

    constructor(
        injector: Injector,
        private _tenantService: TenantServiceProxy
    ) {
        super(injector);
    }
}
