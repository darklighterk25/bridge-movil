import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { DeviceOrientation } from "ui/enums";
import portrait = DeviceOrientation.portrait;
import { View } from "ui/core/view";
import { AutosService } from "~/app/autos-service";
import { AnimationsService } from "~/app/animations-service";
import { RouterExtensions } from "nativescript-angular";


@Component({
    selector: "Store",
    moduleId: module.id,
    templateUrl: "./store.component.html",
    styleUrls:["./store.component.css"]
})
export class StoreComponent implements OnInit {

    private _selectedView: View;

    constructor(private barcodeScanner: BarcodeScanner,
                private autosService: AutosService,
                private animationsService: AnimationsService,
                private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.

    }

    ngOnInit(): void {
        // Init your component properties here.

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    public onScan() {
        this.barcodeScanner.scan({
            formats: "QR_CODE",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 10,
            orientation: portrait,
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only
        }).then((result) => {
                console.log(result);
                this.autosService.setSelectedId(+result.text);
                this.routerExtensions.navigate(["/qrdetails"], {animated: false});
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }
    goToAuto(id: string){
        this.autosService.setSelectedId(+id);
        this.routerExtensions.navigate(["/qrdetails"], {animated: false});
    }

}
