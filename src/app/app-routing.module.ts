import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RegisterComponent } from "~/app/register/register.component";
import { UserProfileComponent } from "~/app/user-profile/user-profile.component";
import { LoginComponent } from "~/app/login/login.component";
import { FavoritesComponent } from "~/app/favorites/favorites.component";
import { MainComponent } from "~/app/main/main.component";

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: MainComponent},
    {path: "store", loadChildren: "~/app/store/store.module#StoreModule"},
    {path: "search", loadChildren: "~/app/search/search.module#SearchModule"},
    {path: "wishlist", component: FavoritesComponent},
    {path: "details", loadChildren: "./details/details.module#DetailsModule" },
    {path: "register", component:RegisterComponent},
    {path: "userProfile", component: UserProfileComponent},
    {path: "login", component:LoginComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
