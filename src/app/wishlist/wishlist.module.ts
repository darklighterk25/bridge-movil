import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { WishlistRoutingModule } from "./wishlist-routing.module";
import { WishlistComponent } from "./wishlist.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WishlistRoutingModule
    ],
    declarations: [
        WishlistComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WishlistModule {
}
