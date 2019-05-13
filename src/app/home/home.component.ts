import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { PlatformLocation } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { Auto } from "../auto";
import { RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { Page } from "tns-core-modules/ui/page";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { topmost } from "tns-core-modules/ui/frame";
import { Color } from "color";
import { android, ios } from "application";
import { device } from "platform";
import { AnimationsService } from "../animations-service";
import { AutosService } from "../autos-service";
import { ActionButtonComponent } from "../action-button/action-button.component";
import * as app from "tns-core-modules/application";
import { SearchBar } from "ui/search-bar";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    @ViewChild("actionButton") _buttonRef: ActionButtonComponent;
    @ViewChild("search") _searchRef: ElementRef;
    @ViewChild("list") _listRef: ElementRef;
    @ViewChild("animatingImage") _imageRef: ElementRef;
    @ViewChild("animatingImageContainer") _imageContainerRef: ElementRef;
    private _autos: Auto[];
    private _selectedView: View;
    private _adjustedOffset: number = 0;
    private searching: boolean = false;

    constructor(private animationsService: AnimationsService,
                private autosService: AutosService,
                private routerExtensions: RouterExtensions,
                private page: Page,
                private location: PlatformLocation) {

        this.page["scrollable-content"] = true;
        this._autos = this.autosService.getAutos();

        if (android) {
            this._updateStatusBarColor("#2B3238");
        }
    }

    ngOnInit() {
        this.location.onPopState(() => {
            this._onNavigatedTo();
        });

        if (ios) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        }
    }

    get autos() {
        return this._autos;
    }

    onNavigationItemTap(args: any) {
        this.autosService.setSelectedId(args.index);
        this._selectedView = args.view;
        this.animationsService.animationOffset = this.measureOffset(args.view, args.object);
        this.routerExtensions.navigate(["/details"], {animated: false});
        setTimeout(() => {
            this._prepareForBackNavigation();
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    private measureOffset(view1: View, view2: View) {
        const offset = view1.getLocationRelativeTo(view2).y;
        if (view2.ios && view2.ios.adjustedContentInset) {
            this._adjustedOffset = view2.ios.adjustedContentInset.top;
        }

        return offset - this._adjustedOffset;
    }

    private _prepareForBackNavigation() {
        this._listRef.nativeElement.opacity = 0;
        this._selectedView.opacity = 0;

        this._imageRef.nativeElement.src = this.autosService.getSelected().image;
        this._imageContainerRef.nativeElement.translateY = this._adjustedOffset;
        this._imageContainerRef.nativeElement.opacity = 1;

        this._buttonRef.makeArrow();
        this._searchRef.nativeElement.opacity = 0;
    }

    private _onNavigatedTo() {
        const offset = this.animationsService.animationOffset + this._adjustedOffset;
        this._imageContainerRef.nativeElement.animate({
            translate: {x: 0, y: offset},
            duration: 200,
            curve: AnimationCurve.easeOut
        }).then(() => {
            this._selectedView.opacity = 1;
            this._imageContainerRef.nativeElement.animate({
                opacity: 0,
                duration: 400,
                curve: AnimationCurve.easeOut
            }).then(() => {
                this._imageContainerRef.nativeElement.translateY = 0;
            });
            // tslint:disable-next-line:no-empty
        }).catch(() => {
        });

        this._listRef.nativeElement.animate({
            opacity: 1,
            duration: 200
            // tslint:disable-next-line:no-empty
        }).catch(() => {
        });
        this._searchRef.nativeElement.animate({
            opacity: 1,
            duration: 200
            // tslint:disable-next-line:no-empty
        }).catch(() => {
        });
    }

    private _updateStatusBarColor(color: string) {
        if (device.sdkVersion >= "21" && android.foregroundActivity) {
            const nativeColor = new Color(color).android;
            const window = android.foregroundActivity.getWindow();
            window.setStatusBarColor(nativeColor);
        }
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
        searchBar.dismissSoftInput();
    }

    onSearch(searchValue) {
        if (searchValue !== "") {
            console.log(searchValue)
        }
    }

    public onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Search for a news and press enter";
        searchBar.dismissSoftInput();
        this.searching = false;
    }

    public onTextChange(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    }
}
