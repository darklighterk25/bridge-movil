import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { SpeechRecognition } from "nativescript-speech-recognition";
import { BarcodeScanner } from "nativescript-barcodescanner";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnimationsService } from "~/app/animations-service";
import { AutosService } from "~/app/autos-service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    providers: [
        SpeechRecognition,
        BarcodeScanner,
        AnimationsService,
        AutosService
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
