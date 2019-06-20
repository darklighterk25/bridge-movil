import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


import { QrdetailsComponent } from "./qrdetails.component";
import { ActionButtonModule } from "../action-button/action-button.module";
import { QrdetailsRoutingModule } from "~/app/qrdetails/qrdetails-routing.module";

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUIChartModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        QrdetailsRoutingModule,
        ActionButtonModule
    ],
    declarations: [
        QrdetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class QrdetailsModule { }
