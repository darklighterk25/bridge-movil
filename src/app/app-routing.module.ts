import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RegisterComponent } from "~/app/register/register.component";

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", loadChildren: "~/app/home/home.module#HomeModule"},
    {path: "store", loadChildren: "~/app/store/store.module#StoreModule"},
    {path: "search", loadChildren: "~/app/search/search.module#SearchModule"},
    {path: "wishlist", loadChildren: "~/app/wishlist/wishlist.module#WishlistModule"},
    { path: "details", loadChildren: "./details/details.module#DetailsModule" },
    {path: "register", component:RegisterComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
