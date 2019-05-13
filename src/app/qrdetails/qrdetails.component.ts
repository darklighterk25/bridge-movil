import { Component, Input, ViewChild, ElementRef, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { screen } from "tns-core-modules/platform";
import { Auto } from "../auto";
import { AutosService } from "../autos-service";
import { AnimationsService } from "../animations-service";

@Component({
  selector: 'ns-qrdetails',
  templateUrl: './qrdetails.component.html',
  styleUrls: ['./qrdetails.component.css'],
  moduleId: module.id,
})
export class QrdetailsComponent implements OnInit {
  auto: Auto;
  static IMAGE_MIN_HEIGHT = 48;

  constructor(private animationsService: AnimationsService,
              private autosService: AutosService,
              private routerExtensions: RouterExtensions) {


    this.auto = this.autosService.getSelected();
  }

  ngOnInit() {
  }
  get minHeight() {
    return screen.mainScreen.heightDIPs + 2 * QrdetailsComponent.IMAGE_MIN_HEIGHT;
  }

  animateIn(view: View, duration: number, delay: number) {
    view.animate({
      scale: { x: 1, y: 1 },
      translate: { x: 0, y: 0 },
      duration: duration,
      delay: delay,
      curve: AnimationCurve.easeOut
    }).catch(() => { });
  }

  animateOut(view: View) {
    view.animate({
      opacity: 0,
      duration: 200
    }).catch(() => { });
  }

  onScroll(args: ScrollEventData) {

  }

  onTap() {
    console.log("regresar qr");
    this.routerExtensions.navigate(['/store'],{animated: false});
  }


}
