import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '@shared/helpers';
import { ScriptLoaderService } from '@shared/services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./base-bootstrap-notify.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class BaseBootstrapNotifyComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/demo/default/custom/components/base/bootstrap-notify.js');

    }

}