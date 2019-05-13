import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsComponent } from "./details.component";
import { ActionButtonModule } from "../action-button/action-button.module";

@NgModule({
	imports: [
		NativeScriptUISideDrawerModule,
		NativeScriptUIListViewModule,
		NativeScriptUIChartModule,
		NativeScriptCommonModule,
		DetailsRoutingModule,
		NativeScriptFormsModule,
		ActionButtonModule
	],
	declarations: [
		DetailsComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class DetailsModule { }
