import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { StoreComponent } from "./store.component";
import { QrdetailsComponent } from "~/app/store/qrdetails/qrdetails.component";

const routes: Routes = [
    {path: "", component: StoreComponent, children:[

        ]},
    {path: "qrdetails/:id", component:QrdetailsComponent},
    {path: "", redirectTo:"", pathMatch:"full"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StoreRoutingModule {
}
