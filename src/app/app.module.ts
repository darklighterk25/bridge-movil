import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { SpeechRecognition } from "nativescript-speech-recognition";
import { BarcodeScanner } from "nativescript-barcodescanner";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnimationsService } from "~/app/animations-service";
import { AutosService } from "~/app/autos-service";
import { RegisterComponent } from './register/register.component';
import { NativeScriptFormsModule, NativeScriptHttpModule } from "nativescript-angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MainComponent } from './main/main.component';
import { ActionButtonModule } from "~/app/action-button/action-button.module";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        ActionButtonModule
    ],
    providers: [
        SpeechRecognition,
        BarcodeScanner,
        AnimationsService,
        AutosService
    ],
    declarations: [
        AppComponent,
        RegisterComponent,
        UserProfileComponent,
        LoginComponent,
        FavoritesComponent,
        MainComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports:[
        NativeScriptHttpModule
    ]
})
export class AppModule {
}
