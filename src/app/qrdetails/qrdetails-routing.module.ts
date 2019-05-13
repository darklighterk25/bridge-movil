import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { QrdetailsComponent } from "./qrdetails.component";

const routes: Routes = [
	{ path: "", component: QrdetailsComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class QrdetailsRoutingModule { }
