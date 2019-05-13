import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { StoreComponent } from "./store.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        StoreRoutingModule
    ],
    declarations: [
        StoreComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StoreModule {
}
