import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { DeviceOrientation } from "ui/enums";
import portrait = DeviceOrientation.portrait;


@Component({
    selector: "Store",
    moduleId: module.id,
    templateUrl: "./store.component.html"
})
export class StoreComponent implements OnInit {

    constructor(private barcodeScanner: BarcodeScanner) {
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
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            orientation: portrait,
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only
        }).then((result) => {
                alert({
                    title: "You Scanned ",
                    message: "Format: " + result.format + ",\nContent: " + result.text,
                    okButtonText: "OK"
                });
                console.log(result);
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }
}
