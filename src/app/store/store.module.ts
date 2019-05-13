import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { StoreComponent } from "./store.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular";
import { ActionButtonModule } from "~/app/action-button/action-button.module";
import { QrdetailsComponent } from "~/app/store/qrdetails/qrdetails.component";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        StoreRoutingModule,
        ActionButtonModule,
    ],
    declarations: [
        StoreComponent,
        QrdetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StoreModule {
}
